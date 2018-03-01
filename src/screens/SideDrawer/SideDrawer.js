import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import MenuButton from '../../components/UI/MenuButtonWithIcon/MenuButtonWithIcon';
import Heading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SideDrawer extends Component {
    onButtonPress = () => {
        this.props.navigator.push({
            screen:"sams-club.EventsScreen",
            title:"Events", //selPlace.name
            passProps: {
                places: this.props.places
            }
        });
    }

    render () {
        return (
            <View style={[
                    styles.container, 
                    {width:Dimensions.get("window").width * 0.8}
                    ]}>
                    <View style={{marginTop:40}}>
                        <MenuButton color="white">Home</MenuButton>
                        <MenuButton onPress={this.onButtonPress} color="white" icon="fiber-manual-record">Events</MenuButton>
                        <MenuButton color="white">Receipts</MenuButton>
                        <MenuButton color="white">Logout</MenuButton>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 22,
        backgroundColor:"#424242",
    },
    headerContainer: {
        padding:15,
        marginTop:30,
        borderBottomWidth:1,
        borderBottomColor:"#CCC", 
        marginBottom:20,
        paddingBottom:15,
    }
});

export default SideDrawer;