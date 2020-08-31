import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [tokenLocal, setTokenLocal] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);

  useEffect(() => {
    async function loadTokenStorage() {
      const tokenStorage = await AsyncStorage.getItem('token');
      if (tokenStorage) {
        setTokenLocal(JSON.parse(tokenStorage));
        setStatusLoading(true);
      }
      setStatusLoading(false);
    }
    loadTokenStorage();
  }, []);

  async function saveInLocalStorage(data) {
    await AsyncStorage.setItem('token', JSON.stringify(data));
  }

  // async function akgumServicoDeLogin() {
  //   try {
  //     // await ... uma chamada à api...
  //     // se tudo ocorrer bem...
  //     setTokenLocal(data.data);
  //     saveInLocalStorage(data.data);
  //     return;
  //   } catch (err) {
  //     throw new Error('Um error qualquer...');
  //   }
  // }

  return (
    <AuthContext.Provider value={{
      tokenLocal,
      statusLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;