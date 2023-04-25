import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: () => void) => {
  _kc
    .init({
      onLoad: "login-required",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = async (successCallback?: () => void) => {
  try {
    console.log("Updating token");
    
    const refreshed = await _kc.updateToken(5);
    if (refreshed) {
      console.log("Token refreshed" + refreshed);
      successCallback && successCallback();
    }
  } catch (error) {
    console.log("Failed to refresh token");
    doLogin();
  }
}

const getIdToken = () => _kc.tokenParsed;

const getUsername = () => _kc.idTokenParsed?.preferred_username;

const hasRole = (roles: string[]) => roles.some((role: string) => _kc.hasRealmRole(role));

const AuthService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getIdToken,
};

export default AuthService;
