'use client';

import { Trash } from 'lucide-react';

import { Tables } from '@/technical/db/types';
import { Button } from '@/technical/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/technical/ui/card';
import { useToast } from '@/technical/ui/use-toast';

import { deleteItem } from '../services/delete-item';

type Props = Omit<Tables<'items'>, 'name' | 'list_id' | 'created_at'> & {
  listId: Tables<'items'>['list_id'];
  createdAt: Tables<'items'>['created_at'];
};

const Item: React.FunctionComponent<Props> = ({
  createdAt,
  description,
  id,
  listId,
}) => {
  const { toast } = useToast();

  const handleDeleteItem = async () => {
    try {
      await deleteItem(listId, id);
      toast({
        title: `L'élément a été supprimé avec succès.`,
        description: `Le nom de l'élément supprimé peut à nouveau être attribué à un nouvel élément.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Une erreur est survenue',
        description: `L'élément n'a pas pu être supprimé. Ré-essayez dans quelques instants et si l'erreur persiste contactez le support.`,
      });
    }
  };

  return (
    <Card className="flex w-full flex-row items-center justify-between p-4">
      <CardHeader className="min-w-0 flex-auto p-0">
        <CardTitle className="truncate text-base">
          {description || 'Elément sans description'}
        </CardTitle>
        <CardDescription>
          Ajouter le {new Date(createdAt).toLocaleString('fr')}
        </CardDescription>
      </CardHeader>

      <Button
        variant="ghost"
        size="icon"
        className="ml-4 shrink-0"
        onClick={handleDeleteItem}
      >
        <Trash />
      </Button>
    </Card>
  );
};

export { Item };
