import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'brand-color-primary' : '#F7B733',
        'brand-color-secondary' : '#FC4A1A',
        'background-color' : '#09090B',
        'surface-color' : '#18181B',
        'stroke-color' : '#27272A',
        'text-color-secondary' : '#A1A1AA',
        'text-color-primary' : '#F4F4F5',
      },
      screens : {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
    },
  },
  plugins: [],
};
export default config;
