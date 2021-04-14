import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button color='red' icon="play" mode="contained" onPress={() => console.log('Pressed')}>
    JOGAR
  </Button>
);

export default MyComponent;