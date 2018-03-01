import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class PickImage extends Component {
    render () {
        return (
            <View>
                <View style={styles.placeholder}>
                    <Icon name="add-a-photo" size={50} color="grey" />
                   
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => 1 + 2}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeholder: {
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#eee",
        borderColor:"grey",
        borderWidth:1,
        width:"100%",
        height:100,
    },
    button: {
        marginTop:8,
        marginBottom:12,
    },
});

export default PickImage;