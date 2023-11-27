import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/technical/ui/use-toast';

import { ItemFormData, itemSchema } from '../model';
import { addItem } from '../services/add-item';

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
      await addItem(listId, { name, description });
      form.reset();
      toast({
        title: `"${name}" a été ajouté avec succès.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: `"${name}" est déjà dans la liste.`,
      });
    }
  };

  return { form, onSubmit };
};

export { useNewItemForm };
