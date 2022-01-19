const spacings = {
  small: '1.5rem',
  medium: '3rem',
  large: '5rem',
  xl: '10rem',
} as const;

const fontSize = {
  small: '1.6rem',
  medium: '2.4rem',
  large: '3.2rem',
  superLarge: '4rem',
  xl: '4.8rem',
} as const;

export const sizes = {
  spacings,
  font: { sizes: fontSize },
} as const;
