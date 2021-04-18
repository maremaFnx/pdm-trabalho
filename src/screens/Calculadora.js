import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, Image, View} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../contexts/auth';

export default function Calc() {
    const [num, setNum, num_2, setNum_2] = useState(0);
 return (
   <View style={styles.container}>
       <TextInput 
        style={styles.input}
        placeholder='Numero 1'
        value={num}
        onChangeText={num => setNum(num)}
      />
      <TextInput 
        style={styles.input}
        placeholder='Numero 2'
        value={num_2}
        onChangeText={num_2 => setNum_2(num)}
      />
   </View>
  );
}
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
    input: {
      height: '10%',
      justifyContent: 'center',
      margin: 20,
  
    }
  
  });