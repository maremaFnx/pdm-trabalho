import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, Image} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';

export default function Inicio({ navigation }) {
  const {listaJogador, setListaJogador, setPontuacao, nome, setNome} = useContext(AuthContext);

  function calculadora(){
    navigation.navigate('Calc')
  }
  function listAdd(){
      if(nome !== ""){
        let data = {
          nome: nome,
          pontuacao: 0
        }
        setPontuacao(data.pontuacao)
        setListaJogador((oldArray) => [...oldArray, data]);
        navigation.navigate('Instrucoes')
      }else{
        alert("Por favor preencha um nome.")
      }

      
  }
  return (
    <SafeAreaView style={styles.container} >

      <StatusBar
        style="light"
        backgroundColor="#0099cc"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Image
        style={styles.box} source={require('../images/Logo.png')}
      />
      <TextInput
      theme={{ colors: { primary: "#0099cc" } }} 
        style={styles.input}
        placeholder='Nome'
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
      <Button
        color="#0099cc"
        icon="play"
        mode="contained"
        onPress={listAdd}
      > JOGAR </Button>
      <Button
        style={{margin:20}}
        color="#0099cc"
        icon={{ source: { uri: 'https://cdn.icon-icons.com/icons2/37/PNG/512/calculator_3534.png' }, direction: 'rtl' }}
        mode="contained"
        onPress={calculadora}
      >  CALCULAR FORÇA ELÉTRICA </Button>
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
  input: {
    width: '90%',
    justifyContent: 'center',
    margin: 20,

  }

});
