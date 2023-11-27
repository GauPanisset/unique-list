import { supabase } from '@/technical/db';

const getList = async (listId: string) => {
  const { data, error } = await supabase
    .from('lists')
    .select('name, items(*)')
    .eq('id', listId)
    .single();

  if (error) {
    throw new Error(`Supabase error: ${JSON.stringify(error, undefined, 2)}`);
  }

  return data;
};

export { getList };
