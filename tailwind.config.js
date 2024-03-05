import themeConfig from './src/components/ui/theme/config'

const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...themeConfig.colors,
      },
      fontFamily: {
        ...themeConfig.fontFamily,
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
