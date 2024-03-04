import { createFileRoute } from '@tanstack/react-router';

import { MessengerPage } from '@/pages';

export const Route = createFileRoute('/')({
  validateSearch: (params: Record<string, unknown>): { page: number } => {
    console.log('paramsss', params);

    // validate with Zod , etc
    return {
      page: 1,
    };
  },
  loaderDeps: ({ search }) => ({ search }),
  // loader: ({ deps: {search } }) =>
  //   new Promise((resolver) => setTimeout(() => resolver({}), 4000)),
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error</div>,
  component: MessengerPage,
});
