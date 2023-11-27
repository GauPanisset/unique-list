'use server';

import { revalidatePath } from 'next/cache';

import { supabase } from '@/technical/db';

import { checkItem } from './check-item';
import { encryptItemName } from './encrypt-item-name';
import { sanitizeItemName } from './sanitize-item-name';

const addItem = async (
  listId: string,
  input: { name: string; description?: string }
) => {
  const { name, description } = input;

  const sanitizedName = sanitizeItemName(name);

  const canAddItem = await checkItem(listId, sanitizedName);

  if (canAddItem !== null) {
    throw new Error(
      `Can not add the item with name: '${name}' since it already exists in the list`
    );
  }

  const { data, error } = await supabase
    .from('items')
    .insert({
      name: encryptItemName(sanitizedName),
      description,
      list_id: listId,
    })
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
