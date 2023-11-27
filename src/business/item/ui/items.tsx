import { getList } from '@/business/list/services/get-list';

import { Item } from './item';
import { NewItemForm } from './new-item-form';

type Props = {
  listId: string;
};

const Items: React.FunctionComponent<Props> = async ({ listId }) => {
  const list = await getList(listId);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">
          Eléments de la liste
        </h2>
        <NewItemForm listId={listId} />
      </div>

      {list.items.length > 0 ? (
        <ul className="space-y-4">
          {list.items.map((item) => (
            <li key={item.id}>
              <Item
                createdAt={item.created_at}
                description={item.description}
                id={item.id}
                listId={item.list_id}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-muted-foreground">
          Pas d&apos;élément dans cette liste...
        </div>
      )}
    </div>
  );
};

export { Items };
