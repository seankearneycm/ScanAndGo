import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { deletePlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MyButton from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class FeedbackInput extends Component {
    state = {
        showThanks:false,
      };
      static navigatorOptions = {
        backButtonTitle:'',
      };
      static navigatorStyle = {
        backButtonTitle:'',
    };
    
    toggleThanksHandler = () => {
        const showThx = this.state.showThanks;
        this.setState({
            showThanks: !showThx
        });
    }

    render () {
        let thanks = (
            <View>
                <DefaultInput onChange={this.onChangeTextHandler} color="grey" placeholder="Enter Comments..."/>
                        <View style={{width:"100%",marginTop:12,}}>
                            <MyButton background="#5FBA1D" color="white" onPress={this.toggleThanksHandler} title="Send Feedback"/>
                        </View>
            </View>
        );
        if(this.state.showThanks){
            thanks = (
                <View>
                    <HeadingText heading="Thank you for your feedback!" style={{textAlign:"center"}}/>
                </View>
            );
        };
        return ( 
                    <View>
                        {thanks}
                    </View>
        );
    };
}

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
    description: {
        flexDirection:"row",
        padding:20,
        color:"grey",
        fontWeight:"300",
        fontSize:20,
        textAlign:"center",
        marginBottom:10,
    },
    portraitContainer: {
        flexDirection: "column",
        flex:1,
      },
      landscapeContainer: {
        flexDirection: "row"
      },
      iconTextContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5,
    },
    buttonBar: {
        paddingTop:20,
        padding:15,
        borderTopColor: '#e3e3f3',
        borderTopWidth: 1,
        borderColor:"grey",
        justifyContent:"center",
        alignItems:"center",
    },
});

export default FeedbackInput;