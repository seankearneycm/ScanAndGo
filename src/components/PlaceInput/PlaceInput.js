import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props =>  {
        return (
                <DefaultInput 
                    placeholder="Enter Place"
                    value={props.placeData.value}
                    valid={props.placeData.valid}
                    touched={props.placeData.touched}
                    onChangeText={props.onTextChangedHandler}
                />
    );
}


export default placeInput;