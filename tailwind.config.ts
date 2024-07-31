import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "primaryColor": "#ce5474",
       "textPrimaryColor": "#cacaca",
       "textSecondaryColor": "#424242"
      }
    },
  },
  plugins: [],
};
export default config;
