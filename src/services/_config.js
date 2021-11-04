import axios from "axios";

export const request = async ({ method, path, data }) => {
  return await axios({
    method,
    url: `${process.env.REACT_APP_WEATHER_API_URL}${path}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
    data,
  })
    .then((res) => ({ ...res.data }))
    .catch((error) => console.log(error));
};
