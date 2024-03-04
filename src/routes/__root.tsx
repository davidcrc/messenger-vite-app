import { createRootRoute, Outlet } from '@tanstack/react-router';
import React, { Suspense } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        {/* Here we can add any components we want to render in top first   */}
        {/* <Link
          to={'/about'}
          search={{
            page: 1,
          }}
        >
          about
        </Link> */}
        {/*  */}
        <Outlet />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </>
    );
  },
});
