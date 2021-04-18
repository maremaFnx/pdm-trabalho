import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, Image} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';

export default function Inicio({ navigation }) {
  const {listaJogador, setListaJogador, setPontuacao} = useContext(AuthContext);
  const [nome, setNome] = useState('');
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
        alert("PREENCHE O NOME FDP")
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
