import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { KEY_TOKEN } from '../utils/keys';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, enableLoading] = useState(false);

  useEffect(() => {
    async function loadTokenStorage() {
      const tokenStorage = await AsyncStorage.getItem(KEY_TOKEN);
      if (tokenStorage) {
        setToken(JSON.parse(tokenStorage));
        enableLoading(true);
      }
      enableLoading(false);
    }
    loadTokenStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
