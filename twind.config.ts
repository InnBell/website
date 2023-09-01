import typography from "@twind/typography";
import type { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        accent: "rgb(126,42,0)",
        red: {
          800: "#822727",
        },
        orange: {
          600: "#C05621",
          900: "#652B19",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      screens: {
        tall: { raw: "(min-height: 750px)" },
        dwarf: { raw: "(max-height: 750px)" },
      },
    },
  },
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');",
  },
  plugins: {
    ...typography(),
  },
} satisfies Options;
