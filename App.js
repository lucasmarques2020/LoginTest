import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <Signin/>
      <StatusBar style="ligth" />
    </>
  );
}

