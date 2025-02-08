const axios = require("axios");

class APIClient {
  constructor({ baseURL, headers = {}, authType = "apiKey", apiKey, token }) {
    this.client = axios.create({
      baseURL,
      headers: this._getAuthHeaders(authType, apiKey, token),
      timeout: 10000, // 10s timeout
    });

    this._setupInterceptors();
  }

  _getAuthHeaders(authType, apiKey, token) {
    let authHeaders = {};
    if (authType === "apiKey" && apiKey) {
      authHeaders["Authorization"] = `Bearer ${apiKey}`;
    } else if (authType === "oauth" && token) {
      authHeaders["Authorization"] = `Bearer ${token}`;
    }
    return authHeaders;
  }

  _setupInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 429) {
          console.warn("Rate limit exceeded, retrying...");
          await new Promise((res) => setTimeout(res, 3000));
          return this.client.request(error.config);
        }
        return Promise.reject(error);
      }
    );
  }

  async request(method, endpoint, data = {}, params = {}, headers = {}) {
    try {
      const response = await this.client({
        method,
        url: endpoint,
        data,
        params,
        headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  get(endpoint, params = {}, headers = {}) {
    return this.request("GET", endpoint, {}, params, headers);
  }

  post(endpoint, data = {}, headers = {}) {
    return this.request("POST", endpoint, data, {}, headers);
  }

  put(endpoint, data = {}, headers = {}) {
    return this.request("PUT", endpoint, data, {}, headers);
  }

  delete(endpoint, headers = {}) {
    return this.request("DELETE", endpoint, {}, {}, headers);
  }
}

module.exports = APIClient;
