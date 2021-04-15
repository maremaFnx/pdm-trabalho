import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Input from '../components/TextInput'


export default function Inicio(props) {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar
        barStyle='light-content'
        backgroundColor="#0099cc"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Image
        style={styles.box} source={require('../images/Logo.png')}
      />
      <Input placeholder={"Nome"} />
      <Button
        color={"#0099cc"}
        icon="play"
        mode="contained"
        onPress={() => props.navigation.navigate('Instrucoes')}
      > JOGAR </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#33ccff'
  },
  box: {
    flex: 0.5,
    width: '100%',
    height: '40%',
  },

});
