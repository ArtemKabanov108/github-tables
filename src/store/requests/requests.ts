import axios, { AxiosResponse } from "axios";
import { GITHUB_USERS_URL } from "../serverRouting/switch";

type GETAxios = (route: string, payloadForConfigGET?: string) => Promise<AxiosResponse>

export const GET: GETAxios = (route, payloadForConfigGET) => {
  return axios.get(`${GITHUB_USERS_URL}${route}`, {
    headers: {
      authorization: payloadForConfigGET ? payloadForConfigGET : false,
    },
  });
};
