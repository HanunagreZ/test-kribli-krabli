import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '0.625rem',
      screens: {
        '2xl': '1160px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-golos-text)', ...fontFamily.sans],
      },
      boxShadow: {
        purple: '0px 0px 139.7px 200px rgba(115, 95, 250, 0.2)',
      },
      content: {
        'arrow-to-r': "url('/arrow-to-r.svg')",
        'arrow-to-b': "url('/arrow-to-b.svg')",
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-lighter': 'var(--color-primary-lighter)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-lighter': 'var(--color-secondary-lighter)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        error: 'var(--color-error)',
        'purple-main': 'var(--color-purple-main)',
        'orange-main': 'var(--color-orange-main)',
      },
      backgroundImage: {
        'purple-gradient-to-r':
          'linear-gradient(90deg, #EBDBFF 0%, #DABAFF 15%, #735FFA 50%, #331BD7 75.5%, #0C018C 98.5%)',
        'grey-gradient-to-b':
          'linear-gradient(180deg, rgba(245, 246, 246, 0) 0%, rgba(143, 144, 144, 0.1) 100%)',
        'purple-text-gradient-to-r':
          'linear-gradient(176deg, #DABAFF 36.99%, #735FFA 54.9%, #331BD7 84.01%, #0C018C 98.68%)',
        'purple-text-gradient-to-l':
          'linear-gradient(90deg, #C9ABFE 0%, #0D028E 100%)',
        'user-group': "url('/user-group.svg')",
        'mage-stars': "url('/mage-stars.svg')",
        'lightning-duotone': "url('/lightning-duotone.svg')",
        'command-group': "url('/command-group.svg')",
        'ai-sorority': "url('/ai-sorority.svg')",
        'hiring-employees': "url('/hiring-employees.svg')",
        personal: "url('/personal.svg')",
        blend: 'linear-gradient(to bottom, #F5F6F6, #FFFFFF)',
      },
      screens: {
        'c-320': '320px',
        'c-480': '480px',
        'c-640': '640px',
        'c-690': '690px',
        'c-960': '960px',
        'c-1280': '1280px',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('stuck', '&:stuck');
    }),
  ],
} satisfies Config;
