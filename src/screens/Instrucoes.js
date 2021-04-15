import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Botao from '../components/Botao'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default _ => {
  return (
    <SafeAreaView style={styles.container} >
       <StatusBar
        barStyle = 'light-content'
        backgroundColor = "#0099cc"
        hidden = {false}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
        <Botao icon={""} texto={"Começar"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33ccff'
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
