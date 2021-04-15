import * as React from 'react';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Botao( props ){
  return (
      <Button
        color={"#0099cc"}
        icon="play" 
        mode="contained"
        onPress={() => props.navigation.navigate('Instrucoes')}
      > JOGAR </Button>
    
  );
}