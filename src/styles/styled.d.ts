import 'styled-components';

declare module 'styled-components' {
  type ThemeType = {
    bodyComponent: string;
    text: string;
    toggleBorder: string;
    background: string;
    fontTheme: string;
  }

  export interface DefaultTheme extends ThemeType {}
}
