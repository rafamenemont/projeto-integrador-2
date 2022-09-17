import 'styled-components';

declare module 'styled-components' {
  type ThemeType = {
    text: string;
    toggleBorder: string;
    fontTheme: string;
    black: string;
    darkerBlack: string;
    purple: string;
    blue: string;
    gray: string;
  }

  export interface DefaultTheme extends ThemeType {}
}
