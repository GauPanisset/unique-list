import { z } from 'zod';

const itemSchema = z.object({
  name: z
    .string()
    .min(
      1,
      "Il semblerait que vous ayez oublié de donner un nom à l'élément que vous souhaitez ajouter."
    ),
  description: z.string().optional(),
});

type ItemFormData = z.infer<typeof itemSchema>;

export { itemSchema };
export type { ItemFormData };
