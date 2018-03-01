import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import EventList from '../../../components/lists/EventList';
import CustomButton from '../../../components/UI/ButtonWithBackground/ButtonWithBackground';

class FindPlaceScreen extends Component {

    state = {

        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0),
    };

    constructor (props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress") {
            if (event.id === "drawerToggle") {
                this.props.navigator.toggleDrawer({
                    side:"left",
                });
            }
        }
    }

    placesLoadedHandler = () => {
            Animated.timing(this.state.addAnim, {
                toValue:1,
                duration:300,
                useNativeDriver: true
            }).start();
    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue:0,
            duration:400,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigator.push({
            screen:"sams-club.EventDetailScreen",
            title:"Event Details", //selPlace.name
            passProps: {
                selectedPlace: selPlace
            }
        });
    }

    render () {
        let content =(
            <Animated.View 
                style={{
                    opacity:this.state.removeAnim,
                    transform: [{

                       scale:this.state.removeAnim.interpolate({
                           inputRange:[0, 1],
                           outputRange: [12, 1],
                       }) 
                    }],
                    transform: [{
                        translateX: this.state.removeAnim.interpolate({
                            inputRange:[0,1],
                            outputRange:[-400, 0]
                        })
                    }]
                }}
            >
                    
                <CustomButton title="Load More" color="white" background="#0070D2" onPress={this.placesSearchHandler}/>
            </Animated.View>
        );
        if(this.state.placesLoaded) {
            content = (
            <Animated.View 
            style={{
                opacity: this.state.addAnim,
                transform: [{
                  translateX: this.state.addAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, 0]
                  }),
                }],
              }}
            >
                <EventList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </Animated.View>
            );
        }
        return (
            <ScrollView>
            <View style={styles.listContainer}>
                 <View >
                        <EventList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
                </View>
                {content} 
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        padding:10,
        backgroundColor:"#E8E8E8",
        flex:1,
        width:"100%",
        justifyContent:"flex-start",
    },
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps)(FindPlaceScreen);