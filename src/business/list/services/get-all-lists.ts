import { supabase } from '@/technical/db';

const getAllLists = async () => {
  const { data, error } = await supabase
    .from('lists')
    .select('id, name, items(*)');

  if (error) {
    throw new Error(`Supabase error: ${JSON.stringify(error, undefined, 2)}`);
  }

  return data;
};

export { getAllLists };
