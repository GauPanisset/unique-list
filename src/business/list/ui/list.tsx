import { Tables } from '@/technical/db/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/technical/ui/card';

type Props = Omit<Tables<'lists'>, 'id'> & { items: Tables<'items'>[] };

const List: React.FunctionComponent<Props> = ({ name, items }) => {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="line-clamp-2">{name}</CardTitle>
        <CardDescription>{`(${items.length} ${
          items.length > 1 ? 'éléments' : 'élément'
        })`}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export { List };
