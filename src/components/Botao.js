import * as React from 'react';
import { Button } from 'react-native-paper';
import Jogador from './Jogador'

const MyComponent = () => (
  <Button color='#0099cc' icon="play" mode="contained" onPress={() => console.log()}>
    JOGAR
  </Button>
);

export default MyComponent;