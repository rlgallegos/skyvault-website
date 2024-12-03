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
            skyBlue: "#2779CF",
            skyBlueCovering: "2779CFEF",
            gray: "#848484",
            lightGray: "#B4B4B4",
            lighterGray: "#EFEFEF"
        },
        fontFamily: {
            lora: ['Lora', 'serif'],
        },
        backgroundImage: {
            'home-desktop': "url('assets/backgrounds/home/desktop-home.png')",
            'home-mobile': "url('assets/backgrounds/home/mobile-home.png')",
            'gallery-desktop': "url('assets/backgrounds/gallery/desktop-gallery.png')",
            'gallery-mobile': "url('assets/backgrounds/gallery/mobile-gallery.png')",
            'qa-desktop': "url('assets/backgrounds/qa/desktop-qa.png')",
            'qa-mobile': "url('assets/backgrounds/qa/mobile-qa.png')",
            'help-desktop': "url('assets/backgrounds/help/desktop-help.png')",
            'help-mobile': "url('assets/backgrounds/help/mobile-help.png')",
            'who-we-are-desktop': "url('assets/backgrounds/who-we-are/desktop-who-we-are.png')",
            'who-we-are-mobile': "url('assets/backgrounds/who-we-are/mobile-who-we-are.png')",
            'terms-desktop': "url('assets/backgrounds/terms/desktop-terms.png')",
            'terms-mobile': "url('assets/backgrounds/terms/mobile-terms.png')"
        }
    },
  },
  plugins: [],
} satisfies Config;
