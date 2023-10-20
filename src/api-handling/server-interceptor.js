
import { headersConfig } from "./api-service";

const setHeaders = (token) => {
  const header = {
    ...headersConfig,
    'token': token,
    'Content-Type': 'application/json'
  };
  return new Headers(header);
}

export const ServerInterceptor = () => {
  if (typeof window !== 'undefined') {
    const { fetch: originalFetch } = window;

    window.fetch = async (...args) => {
      let [resource, config] = args;
      const token = 'f6c67a1e79f4ecc4658073b67fb2c1d0b265a439409b42ce8e03d512ad0dfbcb';
      let options;
      if (token) {
        options = {
          params: config?.params,
          headers: setHeaders(token),
          method: config?.method,
          body: config?.body
        };
      }
      const response = await originalFetch(resource, options || config);
      return response;
    }
  }
}