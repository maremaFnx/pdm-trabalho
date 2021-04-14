import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import Input from './components/TextInput'
import Botao from './components/Botao'
import Jogador from './components/Jogador'

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
       <StatusBar
        barStyle = 'light-content'
        backgroundColor = "#1a1a1a"
        hidden = {false}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <Image style={styles.box} source={require('../images/Logo.png')} />
      <Input/>
      <Botao/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  box: {
    width: '80%',
    height: '50%',
  },
  fundo: {
    flex: 1,
    resizeMode: "cover"
  },
});
