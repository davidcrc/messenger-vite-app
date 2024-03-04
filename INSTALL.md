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
      "@": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      services: `${path.resolve(__dirname, "./src/services/")}`,
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
