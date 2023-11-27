'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/technical/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/technical/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/technical/ui/form';
import { Input } from '@/technical/ui/input';

import { useItemForm } from './use-new-item-form';

type Props = {
  listId: string;
};

const NewItemForm: React.FunctionComponent<Props> = ({ listId }) => {
  const { form, onSubmit } = useItemForm({ listId });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="hidden sm:block">Ajouter un élément</span>{' '}
          <Plus className="sm:ml-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un nouvel élément à la liste</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entrez le nom de l&apos;élément</FormLabel>
                  <FormControl>
                    <Input autoComplete="false" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ce nom sera chiffré. Plus personne ne pourra jamais le lire.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Entrez une description à cet élément{' '}
                    <span className="text-muted-foreground">(optionnel)</span>
                  </FormLabel>
                  <FormControl>
                    <Input autoComplete="false" {...field} />
                  </FormControl>
                  <FormDescription>
                    Cette description restera lisible. Elle permettra
                    d&apos;éventuellement identifier votre élément afin de le
                    supprimer.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-4">
              <Button
                type="reset"
                onClick={() => form.reset()}
                variant="outline"
              >
                Effacer
              </Button>
              <DialogClose asChild>
                <Button type="submit">Ajouter</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { NewItemForm };
