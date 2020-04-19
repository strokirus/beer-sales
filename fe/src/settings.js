export const API_SERVER = '//localhost:6060';

/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const requestBuilder = (endpoint = 'any', params) => {
  let server = API_SERVER;
  switch (endpoint) {
    case 'products':
    
      server = server.concat('/products/');

      Object.keys(params).forEach((key, i) => {
        if (i === 0) {
          server = server.concat(`?${key}=${JSON.stringify(params[key])}`);
        } else {
          server = server.concat(`&${key}=${JSON.stringify(params[key])}`);
        }
      });

      break;

    default:
      params.forEach((param) => {
        server = server.concat(`${param}/`);
      });

      break;
  }

  return server;
};

export const apiEndpoints = {
  requestBuilder,
};
