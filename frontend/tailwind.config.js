/*eslint-disable*/
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    options: {
      safelist: [
        'md:pt-40',
        'md:mt-32',
        'md:mt-40',
        'md:mt-64',
        'md:mt-80',
        'md:-mt-32',
        'md:-mt-40',
        'md:-mt-64',
        'md:-mt-80',
      ],
    },
  },
  theme: {
    extend: {
      spacing: {
        3.5: '0.85rem',
        0.5: '0.05rem',
      },
      fontSize: {
        xs: '0.875rem',
        sm: '0.95rem',
      },
      maxWidth: {
        ch: '50ch',
      },
      screens: {
        xl: '2000px',
      },
      transitionDelay: {
        0: '0',
      },
      transitionDuration: {
        0: '0ms',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',
      yellow: '#ffe11a',
      grey: '#282828',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['DM Sans', 'Arial', 'Helvetica', 'sans-serif'],
      serif: ['Times New Roman', 'Times', 'serif'],
    },
  },
  variants: {
    opacity: ['hover', 'group-hover'],
  },
  plugins: [],
}
