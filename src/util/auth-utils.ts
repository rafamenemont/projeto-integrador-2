
export enum IdentificationKeyLocalStorage {
  AUTH_TOKEN_KEY = 'jhi-authenticationToken',
  CORE_RESPONSE = 'core',
  DEV_CORE_RESPONSE = 'devCore',
  USER_SELECTED = 'user-selected',
  INDICATORS_TOKEN = 'indicators-token',
  EXTRANET_FILES = 'extranet-files',
}
class AuthUtils {
  static isAuthenticated = () => {
    return localStorage.getItem(IdentificationKeyLocalStorage.AUTH_TOKEN_KEY) !== null;
  };

  static isAdmin = () => {
    if (!AuthUtils.isAuthenticated()) return false;
    // @ts-ignore
    return jwt_decode(AuthUtils.getToken()!).auth.includes(AUTHORITIES.ADMIN);
  };

  static setToken = (keyName: IdentificationKeyLocalStorage, token: string) => {
    localStorage.setItem(keyName, token);
  };


  static setTokenAuth = (token: string) => {
    localStorage.setItem(IdentificationKeyLocalStorage.AUTH_TOKEN_KEY, token);
  };

  static getToken = (keyName: IdentificationKeyLocalStorage) => {
    return localStorage.getItem(keyName);
  };

  static setCore = (infoStringfied: string) => {
    localStorage.setItem(IdentificationKeyLocalStorage.CORE_RESPONSE, infoStringfied);
  };

  static setDevCore = (infoStringfied: string) => {
    localStorage.setItem(IdentificationKeyLocalStorage.DEV_CORE_RESPONSE, infoStringfied);
  };

  static setSelectedinLocal = (token: string) => {
    localStorage.setItem(IdentificationKeyLocalStorage.USER_SELECTED, token);
  };

  static getSelectedinLocal = () => {
    return localStorage.getItem(IdentificationKeyLocalStorage.USER_SELECTED);
  };

  static removeCore = () => {
    localStorage.removeItem(IdentificationKeyLocalStorage.CORE_RESPONSE);
  };

  static removeToken = (keyName: IdentificationKeyLocalStorage) => {
    localStorage.removeItem(keyName);
  };

  static getMainPath = () => {
    return '/dashboard';
  };
}

export default AuthUtils;
