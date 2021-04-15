import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native'


export default props => {
    const [text, setText] = React.useState('');

    return (
        <>
        <TextInput style={styles.container}
            theme={{ colors: { primary: '#0099cc' } }}
            placeholder = {props.placeholder}
            mode='outlined'
            value={text}
            onChangeText={text => setText(text)}
            
            
        />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        margin: 20
        
    }
});