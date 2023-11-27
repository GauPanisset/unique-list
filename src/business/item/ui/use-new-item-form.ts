import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/technical/ui/use-toast';

import { ItemFormData, itemSchema } from '../model';
import { addItem } from '../services/add-item';
import { checkItem } from '../services/check-item';

type Props = {
  listId: string;
};

const useNewItemForm = ({ listId }: Props) => {
  const router = useRouter();
  const form = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const { toast } = useToast();

  useEffect(() => {
    if (!listId) {
      router.push('/');
    }
  }, [listId, router]);

  const onSubmit = async ({ name, description }: ItemFormData) => {
    try {
      const itemId = await checkItem(listId, name);

      if (itemId === null) {
        await addItem(listId, { name, description });
        form.reset();
        toast({
          title: `"${name}" a été ajouté avec succès.`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: `"${name}" est déjà dans la liste.`,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { form, onSubmit };
};

export { useNewItemForm };
