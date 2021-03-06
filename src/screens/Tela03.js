import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { Button, Appbar } from 'react-native-paper'
import { AuthContext } from '../contexts/auth';


export default function Tela03({ navigation }) {
    const { setPontuacao, pontuacao } = useContext(AuthContext);
    function answer_ok() {
        setPontuacao(pontuacao + 10)
        navigation.navigate('Fim')
    }
    function answer_wr() {
        navigation.navigate('Fim')
    }
    return (
        <>
            <View style={styles.app}>
                <Appbar.BackAction color={'white'} onPress={() => navigation.navigate('Inicio')} />
            </View>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    style="light"
                    backgroundColor="#0099cc"
                    hidden={false}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <View style={[styles.box]} >
                    <Image style={{ width: 350, height: 350, borderRadius: 20, margin: 20 }}
                        source={require('../images/famosos/bolso_d.jpg')} />
                      <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_wr}
                    > THE ROCK </Button>
                    <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_wr}
                    >  PRINCE </Button>
                    <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_wr}
                    > ROBERTO JUSTUS </Button>
                    <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_ok}
                    > BOLSONARO </Button>
                    <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_wr}
                    > PAULO ANDRE </Button>
                    <Button
                        style={{ width: 350, borderRadius: 20, margin: 10 }}
                        color={"black"}
                        mode="contained"
                        onPress={answer_wr}
                    > ROBERTO MARINHO </Button>

                </View>

            </SafeAreaView>

        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#33ccff',

    },
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'

    },
    box: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "90%",
        height: "95%",
        backgroundColor: "white",
        margin: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
    },
    check: {
        color: "white",
        margin: 10,
        alignItems: 'center',
    },
    botao: {
        margin: 20,
        width: "90%",
        height: '50%'
    },
    app: {
        backgroundColor: '#0099cc'

    }


});
