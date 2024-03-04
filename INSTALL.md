# init

```bash
npm create vite@latest messenger-vite-app -- --template react-ts
```

# Add font awesome to index.html

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

# Add Tailwind

- https://tailwindcss.com/docs/guides/vite

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

```bash
npm add -D sass
```

- rename index.css to index.scss, then copy @tailwind there

- remove content for index.css and update with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<!--  -->

# Add Alias

- update vite.config.ts

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),

      routes: `${path.resolve(__dirname, './src/routes/')}`,

      services: `${path.resolve(__dirname, './src/services/')}`,
    },
  },
});
```

- update tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@/*": ["./src/*", "./dist/*"],
      "routes/*": ["./src/routes/*"],
      "services/*": ["./src/services/*"]
    }
  }
}
```

<!--  -->

# Update eslint

```bash
npm install eslint-plugin-react --save-dev
```

```bash
npm install --save-dev --save-exact prettier
```

```bash
npm install -D eslint-config-prettier
```

- update eslintrc.cjs

```js
module.exports = {
  ...
  extends: [
    ...
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier'
  ],
  ...
}
```

# Add simple import sort

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

- update .eslintrc.cjs

```js
{
  plugins: [..., 'simple-import-sort'],
  ...
  rules: {
    ...,
    'simple-import-sort/imports': 'error'
  },
}
```

# Setting Up Husky and lint-staged

```bash
npm install --save-dev husky
```

```bash
npx husky init
```

echo "npm run lint" > .husky/pre-commit

<!--  -->

# Add tanstack router

```bash
npm install @tanstack/react-router
```

```bash
npm install --save-dev @tanstack/router-vite-plugin
```

// vite.config.ts

```ts
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...,
    TanStackRouterVite(),
  ],
});
```

Create the following files:

src/routes/\_\_root.tsx
src/routes/index.lazy.tsx
src/routes/[my_route_1].tsx
src/routes/[my_route_2].lazy.tsx
src/main.tsx

- remove App.tsx

```bash
npm install @tanstack/router-devtools --save
```

- Optional

```bash
npm install @tanstack/router-devtools --save
```
