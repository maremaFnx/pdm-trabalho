import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './screens/Inicio';
import Instrucoes from './screens/Instrucoes';
import Tela01 from './screens/Tela01'
import Tela02 from './screens/Tela02'
import Tela03 from './screens/Tela03'
import Fim from './screens/Fim'
import AuthProvider from './contexts/auth';
import Calc from './screens/Calculadora';

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
            <Stack.Screen name="Instrucoes" component={Instrucoes} options={{ headerShown: false }} />
            <Stack.Screen name="Fim" component={Fim} options={{ headerShown: false }} />
            <Stack.Screen name="Tela01" component={Tela01} options={{ headerShown: false }} />
            <Stack.Screen name="Tela02" component={Tela02} options={{ headerShown: false }} />
            <Stack.Screen name="Tela03" component={Tela03} options={{ headerShown: false }} />
            <Stack.Screen name="Calc" component={Calc} options={{ headerShown: false }} />
 



          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </>

  );
}