import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';
import MyButton from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import FeedbackInput from '../Feedback/FeedbackInput';

const feedback = (props) => {  
        return ( 
            <View style={[styles.container]}>
                <View style={styles.subcontainer}>
                    <View style={{paddingTop:13,paddingBottom:13}}>
                        <Text style={styles.headingText}>Event Details Feedback</Text>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <HeadingText heading="Provide a Rating" color="grey" style={{fontSize:16,marginBottom:10}}/>
                    <View style={{flexDirection:"row",alignItems:"center",}}>
                        <View style={{margin:1}}><Icon size={30} name="star" color="orange" /></View>
                        <View style={{margin:1}}><Icon size={30} name="star" color="orange" /></View>
                        <View style={{margin:1}}><Icon size={30} name="star" color="orange" /></View>
                        <View style={{margin:1}}><Icon size={30} name="star" color="orange" /></View>
                        <View style={{margin:1}}><Icon size={30} name="star-half" color="orange" /></View>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <FeedbackInput />
                </View>
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:"100%",
        backgroundColor:"#E8E8E8",
        padding:10,
        borderColor:"red",
    },
    subcontainer:{
        backgroundColor:"white",
        padding:10,
        marginBottom:10,
    },
    headingText: {
        fontSize:18,
        fontWeight:"bold",
        color:"grey"
    },
   
      iconTextContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5,
    },
});

export default feedback;