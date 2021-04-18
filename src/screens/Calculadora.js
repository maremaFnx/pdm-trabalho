import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';


export default function Calc() {
  
  const [text, setText] = React.useState('');
  const [text_B, setText_B] = React.useState('');
  
  let altura = parseInt(text)
  let raio = parseInt(text_B)
  let volume = Math.PI * (raio * raio) * altura
  
  const volumes = []
  volumes.push(volume)
  
  const volumes_maiores = volumes.filter(maiores)
  console.log(volumes)
  function maiores(value) {
    return value > 20
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.app}>
        <Appbar.BackAction color={'white'} onPress={() => navigation.navigate('Inicio')} />
      </View>
      <StatusBar
        style="light"
        backgroundColor="#0099cc"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View>
        <Text style={styles.texto}>Insira os valores do seu cilindro em cm!</Text>
        <TextInput style={styles.input}
          theme={{ colors: { primary: "#0099cc" } }}
          label="Altura"
          value={text}
          onChangeText={text => setText(text)}

        />
        <TextInput style={styles.input}
          theme={{ colors: { primary: "#0099cc" } }}
          label="Raio da base"
          value={text_B}
          onChangeText={text_B => setText_B(text_B)}

        />
        <Text style={styles.texto}>O volume do seu cilindro é:</Text>
        <Text style={styles.texto}>{volume} cm³</Text>
        <Text style={styles.texto}>Volumes maiores que 20:</Text>
        <Text style={styles.texto}>{volumes_maiores}{"\n"}</Text>
      </View>



    </SafeAreaView>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33ccff'
  },
  input: {
    justifyContent: 'center',
    margin: 20,

  },
  comp: {
    flex: 1,
    backgroundColor: "#33ccff",
  }, app: {
    backgroundColor: '#0099cc'

  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  }

});