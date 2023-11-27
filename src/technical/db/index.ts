import { createClient } from '@supabase/supabase-js';

import { assertDefined } from '../assertions/assert-defined';
import { Database } from './types.generated';

const supabase = createClient<Database>(
  assertDefined(
    process.env.SUPABASE_URL,
    '"SUPABASE_URL" should be defined as environment variable'
  ),
  assertDefined(
    process.env.SUPABASE_ANON_KEY,
    '"SUPABASE_ANON_KEY" should be defined as environment variable'
  )
);

export { supabase };
