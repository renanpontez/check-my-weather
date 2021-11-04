import { eraseCookie, setCookie, readCookie } from "./cookies";
import { ROUTE_LOGIN } from "./routes";
import { WEATHER_USER } from "./cookies";

export function loginUser(user) {
  eraseCookie(WEATHER_USER);
  setCookie(WEATHER_USER, {
    id: user.id,
    email: user.email,
  });
}

export function logoutUser() {
  //erase cookies
  eraseCookie(WEATHER_USER);
  window.location.href = ROUTE_LOGIN;
}

export function isLoggedIn() {
  const userCookie = readCookie(WEATHER_USER);
  return !!userCookie;
}

export function getUserLogged() {
  return isLoggedIn() && readCookie(WEATHER_USER);
}
