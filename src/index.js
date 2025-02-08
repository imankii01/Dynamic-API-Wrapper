require("dotenv").config();
const APIClient = require("./apiClient");

class DynamicAPIWrapper {
  constructor({ baseURL, apiKey, token, authType = "apiKey" }) {
    if (!baseURL) throw new Error("Base URL is required.");
    this.client = new APIClient({ baseURL, apiKey, token, authType });
  }

  request(method, endpoint, data = {}, params = {}, headers = {}) {
    return this.client.request(method, endpoint, data, params, headers);
  }

  get(endpoint, params = {}, headers = {}) {
    return this.client.get(endpoint, params, headers);
  }

  post(endpoint, data = {}, headers = {}) {
    return this.client.post(endpoint, data, headers);
  }

  put(endpoint, data = {}, headers = {}) {
    return this.client.put(endpoint, data, headers);
  }

  delete(endpoint, headers = {}) {
    return this.client.delete(endpoint, headers);
  }
}

module.exports = DynamicAPIWrapper;
