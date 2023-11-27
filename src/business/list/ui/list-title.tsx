import { getList } from '../services/get-list';

type Props = {
  listId: string;
};

const ListTitle: React.FunctionComponent<Props> = async ({ listId }) => {
  const list = await getList(listId);

  return (
    <div>
      <h1 className="line-clamp-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {`Ma liste "${list.name}"`}
      </h1>
      <span className="text-sm text-muted-foreground">{`(${list.items.length} ${
        list.items.length > 1 ? 'éléments' : 'élément'
      })`}</span>
    </div>
  );
};

export { ListTitle };
