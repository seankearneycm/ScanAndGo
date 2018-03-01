import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';
import OutlineButton from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class PlaceDetail extends Component {
    state = {
        viewMode: "portrait",
        showDescription:false,
      };
      static navigatorOptions = {
        backButtonTitle:'',
      };
      static navigatorStyle = {
        backButtonTitle:'',
    };
    
      constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
      }
    
      componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
      }
    
      updateStyles = dims => {
        this.setState({
          viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
      };
    
    
    itemDeleteHandler = () => {
        this.props.onPlaceDeleted(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    toggleDescriptionHandler = () => {
        const showDesc = this.state.showDescription;
        this.setState({
            showDescription: !showDesc
        });
    }

    feedbackSelectedHandler = () => {
        this.props.navigator.push({
            screen:"sams-club.FeedbackScreen",
            title:"Event Feedback",
        });
    }

    render () {
        let descriptionText = null;
        if(this.state.showDescription) {
            descriptionText = (
                <View style={{padding:10}}>
                    <Text style={{color:"grey",fontSize:14,}}>
                        {this.props.selectedPlace.description}
                    </Text>
                </View>
            );
        }
        return ( 
            <View style={[styles.container]}>
                 <View style={styles.subcontainer}>
                    <View>
                        <Text style={styles.headingText}>{this.props.selectedPlace.name.toUpperCase()}</Text>
                        <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:4,}}>
                            <View style={styles.iconTextContainer}>
                                <View style={{marginRight:8,}}><Icon size={16} name="location-on" color={this.props.color} /></View>
                                <Text>{this.props.selectedPlace.location}</Text>
                            </View>
                            <View style={styles.iconTextContainer}> 
                                <View style={{marginRight:8,}}><Icon size={15} name="schedule" color={this.props.color} /></View>
                                <Text style={[styles.text, {color:this.props.color}]}>Ends: {this.props.selectedPlace.endTime}pm</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width:"100%", height:180, marginTop:10,}}>
                        <Image resizeMode="cover" style={{minWidth:"100%",width:"100%",height:"100%",}} source={this.props.selectedPlace.imageWide}/>
                    </View>
                 </View>
                 
                 <View style={styles.subcontainer}>
                    <TouchableOpacity onPress={this.toggleDescriptionHandler}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:10,paddingBottom:10,}}>
                        <Text style={styles.placeName}>Description</Text>
                        <Icon size={20} name={this.state.showDescription ? "keyboard-arrow-up" : "keyboard-arrow-down" } color="grey" />
                    </View>
                    </TouchableOpacity>
                    <View>
                        {descriptionText}
                    </View>
                </View>
                
                <View>
                    <OutlineButton 
                        title="Provide Feedback" 
                        color="#327205" 
                        onPress={this.feedbackSelectedHandler}
                        backgroundColor="transparent"
                        style={{
                            borderColor:"#5FBA1D",
                            borderRadius:8,
                            borderWidth:5,
                            }} 
                    />
                </View>
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

const mapDispatchToProps = dispatch => {
    return {
        onPlaceDeleted: (key) => dispatch(deletePlace(key)), 
    };
}

export default connect(null, mapDispatchToProps)(PlaceDetail);