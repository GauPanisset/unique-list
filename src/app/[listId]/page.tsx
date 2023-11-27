import { redirect } from 'next/navigation';

import { Items } from '@/business/item/ui/items';
import { ListTitle } from '@/business/list/ui/list-title';
import { Separator } from '@/technical/ui/separator';

type Props = {
  params: {
    listId: string;
  };
};

const ListPage: React.FunctionComponent<Props> = ({ params }) => {
  return (
    <main className="m-auto max-w-2xl space-y-8 p-4">
      <ListTitle listId={params.listId} />
      <Separator />
      <Items listId={params.listId} />
    </main>
  );
};

export const revalidate = 0;

export default ListPage;
