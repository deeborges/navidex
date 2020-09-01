import axios from "axios";
import { ENV, PRODUCTION_ROUTES, DEVELOPMENT_ROTUES } from "../../env";

const ENVIRONMENT_MODE = {
  development: DEVELOPMENT_ROTUES.baseUrl,
  production: PRODUCTION_ROUTES.baseUrl,
};

const API = axios.create({
  baseURL: ENVIRONMENT_MODE[ENV].baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default API;
