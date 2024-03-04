import { createLazyFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@/pages';

export const Route = createLazyFileRoute('/register')({
  component: RegisterPage,
});
