import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './screens/Inicio';
import Instrucoes from './screens/Instrucoes';
import Tela01 from './screens/Tela01'

const Stack = createStackNavigator();

export default function App() {
  return (
    
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
        <Stack.Screen name="Instruções" component={Instrucoes} options={{headerStyle: {
            backgroundColor: '#0099cc',
          }, headerTintColor: 'white'}}/>
          <Stack.Screen name="Desafio 1" component={Tela01} options={{headerStyle: {
            backgroundColor: '#0099cc',
          }, headerTintColor: 'white'}}/>
          

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}