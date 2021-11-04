import { request } from "./_config";

export const getWeatherByCityName = async (cityName) =>
  await request({
    method: "GET",
    path: `weather?q=${cityName}`,
  });
