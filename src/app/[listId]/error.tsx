'use client';

import Link from 'next/link';

const Error = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 p-4 text-secondary">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Aïe ! Ca ne fonctionne pas...
      </h1>
      <div className="mt-16 w-full max-w-2xl text-muted-foreground">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Quelques idées pour se débloquer :
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Retourner sur la{' '}
            <Link className="font-medium underline underline-offset-4" href="/">
              page d&apos;accueil
            </Link>
          </li>
          <li>Contacter le support</li>
        </ul>
      </div>
    </main>
  );
};

export default Error;
