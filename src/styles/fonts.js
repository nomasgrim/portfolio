import MONSTERRAT_REGULAR from './Montserrat/Montserrat-Regular.ttf';
import MONSTERRAT_THIN from './Montserrat/Montserrat-Thin.ttf';
import MONSTERRAT_SEMIBOLD from './Montserrat/Montserrat-SemiBold.ttf';

export const Montserrat = {
  fontFamily: 'Monteserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('Montserrat'),
    local('Montserrat-Regular'),
    url(${MONSTERRAT_REGULAR}) format('ttf')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const MontserratThin = {
  fontFamily: 'Monteserrat',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Montserrat Thin'),
    local('Montserrat-Thin'),
    url(${MONSTERRAT_THIN}) format('ttf')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const MontserratSemiBold = {
  fontFamily: 'Monteserrat SemiBold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('Montserrat'),
    local('Montserrat-SemiBold'),
    url(${MONSTERRAT_SEMIBOLD}) format('ttf')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};