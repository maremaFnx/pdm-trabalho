import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Input from './components/TextInput'
import Botao from './components/Botao'
import Jogador from './components/Jogador'

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <Input/>
      <Botao />
    </SafeAreaView>
    
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  
  }
});
