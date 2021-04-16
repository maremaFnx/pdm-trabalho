import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { Button } from 'react-native-paper'

export default function Tela01(props) {
    return (

        <SafeAreaView style={styles.container} >
            <StatusBar
                barStyle='light-content'
                backgroundColor="#0099cc"
                hidden={false}
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <View style={[styles.box]} >
                <Image style={{ width: 350, height: 350, borderRadius: 20, margin: 20 }}
                    source={require('../images/famosos/tom_hanks_d.jpg')} />
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > CLEITON DO PASTEL </Button>
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > ADEMIR DAGUIA </Button>
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > MAGUILA </Button>
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > JOHN TRAVOLTA </Button>
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > BILL CLINTON </Button>
                <Button
                    style={{ width: 350, borderRadius: 20, margin: 10 }}
                    color={"black"}
                    mode="contained"
                    onPress={() => props.navigation.navigate('Instrucoes')}
                > TOM HANKS </Button>
                
            </View>


        </SafeAreaView>
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
    }
});
