import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.textInputs, props.style, !props.valid && props.touched ? styles.inValid : null]} 
    />
);

const styles = StyleSheet.create({
    textInputs: {
        width:"100%",
        padding:8,
        borderColor:"#eee",
        borderWidth:1,
        marginTop:5,
        marginBottom:5,
        backgroundColor:"white",
        color:"grey",
    },
    inValid: {
        color:"#f9c0c0"
    }
});

export default defaultInput;