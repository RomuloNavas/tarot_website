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
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['header1', 'text-6xl font-extrabold bebas text-textMain font-serif'],
    ['header2', 'text-3xl xl:text-5xl font-bold font-arapey'],
    ['header3', 'text-2xl xl:text-4xl font-bold font-arapey'],
    ['header4', 'text-xl xl:text-2xl font-bold font-arapey leading-[3.2rem] text-white'],
    ['font-body', 'text-md sm:text-lg font-normal font-sans leading-[2.6rem] sm:leading-[1.7rem] text-gray-300 '],
    ['font-label', 'text-xs font-normal uppercase font-lato tracking-[.18rem] leading-[1.6rem]'],
    ['font-button', 'text-lg font-bold font-arapey tracking-wider'],
  ],
  theme: {
    colors: {
      bg: '#17141d',
      primary: '#a07851',
      candleOn: '#fb900a',
      focus: '#9dbbe9',
      hint: '#158443',
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
