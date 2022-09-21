import 'styled-components';

declare module 'styled-components' {
  type ThemeType = {
    text: string;
    textDetail: string;
    toggleBorder: string;
    fontTheme: string;
    black: string;
    blackOpacity: string;
    darkerBlack: string;
    purple: string;
    blue: string;
    gray: string;
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
