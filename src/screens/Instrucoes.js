import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';

export default function Instucoes({navigation}) {
  const {setPontuacao, pontuacao} = useContext(AuthContext);
  return (
    <>
    <View style={styles.app}>
        <Appbar.BackAction color={'white'} onPress={() => navigation.navigate('Inicio')} />
        </View>
      <SafeAreaView style={styles.container} >
        <StatusBar
          style="light"
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
            <Paragraph>Quando você achar que é o ator que você pensa, clique no botão. Um acerto te dá mais pontos,
              um erro te tira pontos.
          </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Atenção</Title>
            <Paragraph>Se você clicar no botão voltar, perderá toda a sua pontuação!
          </Paragraph>
          </Card.Content>
        </Card>
        <Button
          color={"#0099cc"}
          icon="play"
          mode="contained"
          onPress={() => navigation.navigate('Tela01')}
        > COMEÇAR </Button>

      </SafeAreaView>
    </>
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
  app: {
    backgroundColor: '#0099cc'

  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    width: '90%'
  },
  check: {
    color: "white",
    margin: 10,
    alignItems: 'center',
  }
});
