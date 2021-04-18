import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';


export default function Aleluia({ navigation }) {
    const { setPontuacao, pontuacao } = useContext(AuthContext);

    return (
        <>
            <SafeAreaView style={styles.container} >
                <StatusBar
                    style="light"
                    backgroundColor="#0099cc"
                    hidden={false}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <Text style={styles.texto}>SUA PONTUAÇÃO FOI DE:</Text>
                <Text style={styles.texto_d} >{pontuacao}</Text>

                <Button
                    color="#0099cc"
                    icon="play"
                    mode="contained"
                    onPress={() => navigation.navigate('Inicio')}
                > JOGAR NOVAMENTE </Button>
            </SafeAreaView>
        </>
    );
};



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
    texto: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 40,
        margin: 20,
        textAlign: 'center'
     },
     texto_d: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 30,
        margin: 20
     }

});
