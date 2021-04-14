import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const MyComponent = () => {
    const [text, setText] = React.useState('');

    return (
        <TextInput onFocus style={styles.container}
            
            theme={{ colors: { primary: 'red' } }}
            placeholder = "Nome"
            mode='flat'
            value={text}
            onChangeText={text => setText(text)}
            
        />
    );
};

export default MyComponent;
const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        margin: 20
        
    }
});