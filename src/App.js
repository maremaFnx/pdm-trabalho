import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './screens/Inicio';
import Instrucoes from './screens/Instrucoes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
        <Stack.Screen name="Instrucoes" component={Instrucoes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}