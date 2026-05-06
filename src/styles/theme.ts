export const lightTheme = {
  colors: {
    royal: '#0072BC',
    vibrant: '#00AEEF',
    dark: '#0B1F35',
    white: '#FFFFFF',
    gray: '#F5F5F5',
    text: '#333333',
    background: '#FFFFFF',
    cardBg: '#FFFFFF',
    headerBg: '#FFFFFF',
    footerBg: '#0B1F35',
    border: '#E0E0E0',
    fadeWhite: '#FFFFFF'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  }
} as const;

export const darkTheme = {
  colors: {
    royal: '#00AEEF',
    vibrant: '#0072BC',
    dark: '#E0E0E0',
    white: '#1a1a2e',
    gray: '#2d2d3f',
    text: '#E0E0E0',
    background: '#121212',
    cardBg: '#1e1e2e',
    headerBg: '#1a1a2e',
    footerBg: '#0f0f1a',
    border: '#2d2d3f',
    fadeWhite: 'rgba(18, 18, 24, 0.95)'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  }
} as const;

export type Theme = typeof lightTheme;