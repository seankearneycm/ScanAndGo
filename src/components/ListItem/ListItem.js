import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image style={styles.placeImage} resizeMode="contain" source={props.placeImage} />
            <View style={styles.textContainer}>
                <Text style={[styles.listText, {marginBottom:12}]}>{props.placeName.toUpperCase()}</Text>
                <View style={{justifyContent:"flex-end"}}>
                    <View style={[styles.iconTextContainer, ]}> 
                        <View style={{marginRight:8,}}><Icon size={16} name="location-on" color={props.color} /></View>
                        <Text style={[styles.text, {color:props.color, fontSize:16,}]}>{props.location}</Text>
                    </View>
                    <View style={styles.iconTextContainer}> 
                        <View style={{marginRight:8,}}><Icon size={15} name="schedule" color={props.color} /></View>
                        <Text style={[styles.text, {color:props.color}]}>Ends: {props.endTime}pm</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding:10,
        marginBottom:10,
        backgroundColor:"#FFF",
        flexDirection:"row",
        alignItems:"center",
    },
    placeImage: {
        marginRight:20,
        maxWidth:80,
        height:90,
        flex:0,
    },
    listText: {
        color:"grey",
        fontSize:14,
    },
    textContainer:{
        flex:1,
        flexDirection:"column",
       justifyContent:"space-between", 
    },
    iconTextContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5,
    },
    text: {
        fontSize:14,
        fontWeight:"300",

    }
});

export default listItem;