'use server';

import { revalidatePath } from 'next/cache';

import { supabase } from '@/technical/db';

const deleteItem = async (listId: string, itemId: string) => {
  const { error } = await supabase.from('items').delete().eq('id', itemId);

  if (error) {
    throw new Error(`Supabase error: ${JSON.stringify(error, undefined, 2)}`);
  }

  revalidatePath(`/${listId}`);

  return itemId;
};

export { deleteItem };
