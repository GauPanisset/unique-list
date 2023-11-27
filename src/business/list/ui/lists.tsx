import Link from 'next/link';

import { getAllLists } from '../services/get-all-lists';
import { List } from './list';

const Lists: React.FunctionComponent = async () => {
  const lists = await getAllLists();

  return (
    <ul className="grid w-full grid-cols-2 gap-4">
      {lists.map((list) => (
        <li key={list.id} className="w-full hover:bg-slate-100 hover:shadow-md">
          <Link href={`/${list.id}`}>
            <List name={list.name} items={list.items} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Lists };
