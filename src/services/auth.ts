import axios from "axios";

const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

publicApi.interceptors.request.use((config) => {
  config.headers.Authorization = undefined;
  return config;
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post("/refresh");

        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return privateApi(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export const authService = {
  async login(email: string, password: string) {
    const response = await publicApi.post("/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.session.accessToken);
    return response.data;
  },
  async logout() {
    localStorage.removeItem("accessToken");
  },
  async register(email: string, password: string) {
    const response = await publicApi.post("/register", {
      email: email,
      password: password,
    });
    return response.data;
  },
};

export { publicApi, privateApi };
