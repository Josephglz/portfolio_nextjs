import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background':'#010E1B',
        'white-highlight':'#DEE2E6',
        'green-highlight':'#35E888',
        'green-hover': '#35E888',
        'green-selected': '#1c7d32',
        'orange-highlight':'#F2B808',
        'gray-option': '#1B2732',
        'primary-blue': '#09203A'
      },
      fontFamily: {
        'Lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
