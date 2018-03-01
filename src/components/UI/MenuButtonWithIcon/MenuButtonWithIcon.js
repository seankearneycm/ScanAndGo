import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const menuButtonWithIcon = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor:props.background}]}>
                <View style={{marginRight:8,width:20,}}><Icon size={20} name={props.icon} color={props.color} /></View>
                <Text style={[styles.text, {color:props.color}]}>{props.children}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
    },
    button: {
        padding:10,
        flexDirection:"row",
        marginBottom:10,
        alignItems:"center", 
    },
    text: {
        fontSize:16,
        fontWeight:"300",

    }
});

export default menuButtonWithIcon;