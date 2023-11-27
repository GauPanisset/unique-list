import { Lists } from '@/business/list/ui/lists';

const Home = () => {
  return (
    <main className="m-auto max-w-2xl p-4">
      <h1 className="mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Toutes les listes
      </h1>
      <Lists />
    </main>
  );
};

export const revalidate = 0;

export default Home;
