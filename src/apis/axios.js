import axios from "axios";

// 현민짱 IP
// const HOST = "http://10.181.40.161:";
// const PORT = "8080/";

// const ARTICLE = "gb/";

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    // baseURL: HOST + PORT,
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance();

