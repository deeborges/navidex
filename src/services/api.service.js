import _api from './api';

export const runService = async (options) => {
  try {
    return await _api(options);
  } catch (err) {
    throw new Error("Erro ao executar a API");
  }
};
