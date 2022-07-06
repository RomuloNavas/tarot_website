import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['header1', 'text-6xl font-extrabold text-textMain'],
    ['header2', 'text-3xl xl:text-5xl font-bold'],
    ['header3', 'text-2xl xl:text-4xl font-bold'],
    ['header4', 'text-2xl font-bold leading-[2.2rem] '],
    ['font-body', 'text-xl font-normal font-sans leading-[1.6rem] sm:leading-[1.7rem] text-textSecondary'],
    ['font-label', 'text-xs font-normal uppercase font-lato tracking-[.18rem] leading-[0.8rem]'],
    ['font-button', 'text-lg font-bold tracking-wider'],
  ],
  theme: {
    colors: {
      bg: '#17141d',
      primary: '#a07851',
      candleOn: '#fb900a',
      focus: '#9dbbe9',
      hint: '#158443',
      textPrimary: 'white',
      textSecondary: '#e4e7eb',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      // https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts
      provider: 'google', // default provider
      fonts: {
        // Use any of the fonts by simply writing font-mono, font-sans, font-bebas, font-lato
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        arapey: 'Arapey',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
