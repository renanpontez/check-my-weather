export const WEATHER_USER = "@WEATHER_USER";

export function setCookie(name, value) {
  const days = 2;
  var expires = "";
  var date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();

  var cookie = [
    name,
    "=",
    escape(JSON.stringify(value || "")),
    expires,
    "; path=/",
  ].join("");
  document.cookie = cookie;
}

export function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function readCookie(name) {
  var result = document.cookie.match(new RegExp(name + "=([^;]+)"));
  result && (result = JSON.parse(unescape(result[1])));
  return result;
}
