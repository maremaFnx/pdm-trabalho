import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';


export default function Aleluia({ navigation }) {
    const { setPontuacao, pontuacao, nome } = useContext(AuthContext);
    const {} = useContext(AuthContext);
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
                <Image
                    style={styles.box} source={require('../images/Congrats.png')}
                />
                <Text style={styles.texto}>Parabéns {nome}! Sua pontução foi de:</Text>
                <Text style={styles.texto} >{pontuacao}</Text>

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
        margin: 20,
        flex: 0.5,
        width: '66%',
       
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        margin: 20,
        textAlign: 'center'
    }

});
