import supabase from './supabaseClient';

export const fetchData = async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*');
  if (error) throw error;
  return data;
};

export const insertData = async (tableName: string, data: Record<string, unknown>) => {
  const { data: insertedData, error } = await supabase
    .from(tableName)
    .insert(data);
  if (error) throw error;
  return insertedData;
};