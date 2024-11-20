const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=42.4667&longitude=-2.45&current=temperature_2m&timezone=auto&forecast_days=1";
import axios from "axios";

export const getTemperatura = async () => {
  const respuesta = axios.get(API_URL);
  const nuevaTemperatura = (await respuesta).data.current.temperature_2m;
  return nuevaTemperatura;
};
