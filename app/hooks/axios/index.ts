import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

interface Props extends CreateAxiosDefaults<Omit<any, "baseURL">> {
  url: string;
  withToken: boolean;
}

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});
