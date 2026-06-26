import type { Config } from "tailwindcss";

const config: Config = {

  content: [

    "./app/**/*.{ts,tsx}",

    "./components/**/*.{ts,tsx}",

    "./lib/**/*.{ts,tsx}"

  ],

  theme: {

    extend: {

      colors: {

        primary: "#1E352B",

        secondary: "#F7F3ED",

        accent: "#B58A52",

        dark: "#212121",

        light: "#FCFBF8"

      },

      fontFamily: {

        sans: [

          "Inter",

          "sans-serif"

        ],

        serif: [

          "Cormorant Garamond",

          "serif"

        ]

      }

    }

  },

  plugins: []

};

export default config;
