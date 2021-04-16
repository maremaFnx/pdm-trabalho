import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Instucoes(props) {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar
        barStyle='light-content'
        backgroundColor="#0099cc"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <Card style={styles.card}>
        <Card.Content>
          <Title>Qual o princípio do jogo?</Title>
          <Paragraph>O jogo consiste em acertar qual é o artista
          que está na foto, porém a foto é distorcida, pra dificultar.
          </Paragraph>
        </Card.Content>

      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Botões.</Title>
          <Paragraph>Quando você achar que é o ator que você pensa, clique no botão
          irá aparecer um 'pop-up' pedindo se você tem certeza. Cada vez que você clicar em "Não tenho certeza"
          você perde pontos.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Tempo.</Title>
          <Paragraph>Assim que você chegar no artista, começa a contar um cronometro, esse cronometro é acumulativo, ou seja
          ele conta seu tempo total nos desafios, quanto mais demorar, mais pontos você perde.
          </Paragraph>
        </Card.Content>
      </Card>
      <Button
        color={"#0099cc"}
        icon="play"
        mode="contained"
        onPress={() => props.navigation.navigate('Desafio 1')}
      > COMEÇAR </Button>
      <View style={styles.check}>
      <Text style={{fontWeight:'bold', color: 'white'}}>Não me lembre disso</Text>
      <Checkbox
        uncheckedColor="white"
        color="white"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#33ccff',
    
  },
  box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    width: '90%'
  },
  check:{
    color: "white",
    margin: 10,
    alignItems: 'center',
  }
});
