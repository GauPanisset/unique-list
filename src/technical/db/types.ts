import { Database } from './types.generated';

type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T];
type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];

export type { Database, Enums, Tables };
