declare module "dynamic-api-wrapper" {
    interface APIClientOptions {
      baseURL: string;
      apiKey?: string;
      token?: string;
      authType?: "apiKey" | "oauth";
    }
  
    class DynamicAPIWrapper {
      constructor(options: APIClientOptions);
      request(
        method: string,
        endpoint: string,
        data?: any,
        params?: any,
        headers?: any
      ): Promise<any>;
      get(endpoint: string, params?: any, headers?: any): Promise<any>;
      post(endpoint: string, data?: any, headers?: any): Promise<any>;
      put(endpoint: string, data?: any, headers?: any): Promise<any>;
      delete(endpoint: string, headers?: any): Promise<any>;
    }
  
    export = DynamicAPIWrapper;
  }
  