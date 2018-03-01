import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button, TextInput, StyleSheet, 
    ImageBackground, Dimensions, Platform, KeyboardAvoidingView, 
    Keyboard, TouchableWithoutFeedback } from 'react-native';
import startMainApp from '../MainTabs/startMainApp';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import { DELETE_PLACE } from '../../store/actions/actionTypes';
import MainText from '../../components/UI/MainText/MainText';
import ButtonCustom from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import SamsLogo from '../../assets/sams-logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AuthScreen extends Component {
static navigatorStyle ={
    navBarBackgroundColor: '#FFF',
    navBarTranslucent: true,
}


state = {
    viewMode: Dimensions.get('window').height > 800 ? "portrait" : "landscape",
    controls: {
        email: {
            value: '',
            valid: false,
            validationRules: {
                isEmail:true,
            }
        },
        password: {
            value: '',
            valid: false,
            validationRules: {
                minLength:6,
            }
        },
        confirmPassword: {
            value: '',
            valid: false,
            validationRules: {
                equalTo:'password',
            }
        },
    }
}

constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
}

componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
}


updateStyles = (dims) => {
    this.setState({
        viewMode: dims.window.height > 500 ? "portrait" : "landscape",
    });
}

loginHandler = () => {
    startMainApp();
}



    render() {
        return (
            <View style={styles.container}>
                <View style={{width:"100%",marginTop:"30%", alignItems:"center",}}>
                    <Image source={SamsLogo} style={{width:142, height:116}}/> 
                    <View style={styles.inputContainer}>
                        <HeadingText heading="Scan & Go" style={styles.heading}/>
                        <MainText color="#4A4A4A" style={styles.mainText}>One less line to wait in</MainText>
                     </View> 
                </View>

                <View style={{width:"100%"}}>
                    
                    <View style={styles.buttons}>
                        <ButtonCustom 
                                style={styles.button}
                                color="white" 
                                weight="bold"
                                size={18}
                                background="#5FBA1D" 
                                onPress={this.loginHandler}
                                title="Sign In"
                        />
                    </View>
                </View>
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
    },
    direction: {
        flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
    },
    heading: {
        fontSize:42,
        textAlign:"center",
        color:"#4A4A4A",
        marginTop:20,
        letterSpacing:3,
        fontWeight:"500",
    },
    mainText: {
        color:"#4A4A4A",
        fontSize:18,
        textAlign:"center",
        letterSpacing:1,
        marginTop:6,
    },
    inputContainerInd: {
        width:"100%",
        marginBottom:14,
        borderBottomWidth:1,
        borderBottomColor:"#CCC", 
    },
    inputContainer: {
        width:"100%",
    },
    buttonContainer: {
        width:"70%",
        alignItems:"center",
    },
    button: {
        padding:18,
    },
    buttons: {
        width:"100%",
        marginTop:5,
    },
    icon: {
        marginLeft:"20%",
        marginRight:5,
    },
});

export default AuthScreen;


{/* 
         <View style={this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput }>
                            <DefaultInput placeholder="Confirm Password" />
        </View>
    
    <View style={styles.buttons}>
                        <ButtonCustom 
                            color="#0070D2" 
                            background="#EEE" 
                            onPress={this.switchHandler}
                            title="Register"
                        />
 </View> */}