import config from "./config";
import axios from "axios";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const { server_url } = config;

const createApiRequest = (method, route, data) =>
  axios({
    method,
    url: server_url + route,
    data
  }).catch(function(error) {
    console.error(error);
  });

const api = {};

export default api;
