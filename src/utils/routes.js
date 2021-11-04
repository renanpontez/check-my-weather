export const ROUTE_HOME = "/";
export const ROUTE_LOGIN = "/auth/login";
export const ROUTE_SEARCH = "/search";
export const ROUTE_HISTORY = "/history";

export const buildURL = (routePath, { paramName, paramValue }) =>
  routePath.replace(`:${paramName}`, paramValue);
