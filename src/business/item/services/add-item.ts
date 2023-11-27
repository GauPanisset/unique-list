'use server';

import { revalidatePath } from 'next/cache';

import { supabase } from '@/technical/db';

import { encryptItem } from './encrypt-item';

const addItem = async (
  listId: string,
  input: { name: string; description?: string }
) => {
  const { name, description } = input;

  const { data, error } = await supabase
    .from('items')
    .insert({ name: encryptItem(name), description, list_id: listId })
    .select('id');

  if (error) {
    throw new Error(`Supabase error: ${JSON.stringify(error, undefined, 2)}`);
  }

  if (!data) {
    throw new Error(`No item returned from database insertion`);
  }

  const newItem = data[0];
  revalidatePath(`/${listId}`);

  return newItem.id;
};

export { addItem };
