import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';


export default function Calc({navigation, id}) {

  const [valores, setValores] = React.useState([]);
  const [valor, setValor] = React.useState(0);
  const [valores_maiores, setValores_maiores] = React.useState([]);
  const [text, setText] = React.useState('');
  const [text_B, setText_B] = React.useState('');
  const [text_C, setText_C] = React.useState('');



  function calculo() {
    var q_a = parseInt(text)
    var q_b = parseInt(text_B)
    var q_d= parseInt(text_C)
  

    setValor((427 * q_a * q_b)/ (q_d*q_d))

    setValores((oldArray) => [...oldArray, valor]);
    setValores_maiores(valores.filter(maiores))
    console.log('valores_maiores', valores_maiores)
    console.log('valores', valores)

  }

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
        <Text style={styles.texto}>Insira os valores em números inteiros!</Text>
        <TextInput style={styles.input}
          theme={{ colors: { primary: "#0099cc" } }}
          label="Q1"
          value={text}
          onChangeText={text => setText(text)}

        />
        <TextInput style={styles.input}
          theme={{ colors: { primary: "#0099cc" } }}
          label="Q2"
          value={text_B}
          onChangeText={text_B => setText_B(text_B)}

        />
        <TextInput style={styles.input}
          theme={{ colors: { primary: "#0099cc" } }}
          label="D"
          value={text_B}
          onChangeText={text_C => setText_C(text_c)}

        />
        <Button
          style={styles.input}
          color="#0099cc"
          icon="play"
          mode="contained"
          onPress={calculo}
        > CALCULAR</Button>
         <Text style={styles.texto}>O valor da força elétrica é:</Text> 
        <Text style={styles.texto}>{valor} N</Text> 
        <Text style={styles.texto}>Valores maiores que 20:</Text>
 

        <FlatList
          data={valores_maiores}
          keyExtractor={item => item.id !== undefined  || item.id !== null ?
          item.id : " "}
          renderItem={({item}) => (
            <View>
              <Text style={styles.texto_log}>
                    {item}
              </Text>
            </View>
          )}
        />

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
  },
  texto_log: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    margin: 5,
    textAlign: 'center'
  }

});