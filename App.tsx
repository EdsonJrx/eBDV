import React from 'react';
import { StatusBar } from 'react-native';

import { Login } from './src/Pages/Login';
import { colors } from './src/styles';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle='dark-content'
      />
      <Login />
    </>
  );
};