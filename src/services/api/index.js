import { ENV, ROUTES_DEVELOPMENT, ROUTES_PRODUCTION } from '../../env';

const ENVIRONMENT = {
  development: ROUTES_DEVELOPMENT.baseUrl,
  production: ROUTES_PRODUCTION.baseUrl,
};

export const serviceDefault = async (endpoint, options) => {
  try {
    const response = await fetch(`${ENVIRONMENT[ENV]}${endpoint}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Erro ao chamar o serviço.');
  }
};
