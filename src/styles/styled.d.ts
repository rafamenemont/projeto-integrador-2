import 'styled-components';

declare module 'styled-components' {
  type ThemeType = {
    bodyComponent: string;
    text: string;
    textDetail: string;
    toggleBorder: string;
    background: string;
    fontTheme: string;
    buttonSolid: string;
    buttonSolidText: string;
    buttonSolidBorder: string;
    buttonSolidHover: string;
    buttonTransparent: string;
    buttonTransparentText: string;
    buttonTransparentBorder: string;
    buttonTransparentHover: string;
  }

  export interface DefaultTheme extends ThemeType { }
}
