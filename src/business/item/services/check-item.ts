'use server';

import bcrypt from 'bcrypt';

import { supabase } from '@/technical/db';

const checkItem = async (listId: string, name: string) => {
  const { data, error } = await supabase
    .from('lists')
    .select('id, items!inner(id, name)')
    .eq('id', listId);

  if (error) {
    throw new Error(`Supabase error: ${JSON.stringify(error, undefined, 2)}`);
  }

  const items = data?.[0]?.items ?? null;

  if (items === null) return null;

  return items.find((item) => bcrypt.compareSync(name, item.name))?.id ?? null;
};

export { checkItem };
