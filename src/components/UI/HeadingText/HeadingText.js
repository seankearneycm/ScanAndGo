import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text 
        {...props} 
        style={[styles.heading, props.style]}>
        {props.heading}
    </Text>
);

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        color: "#0070D2",
        fontWeight:"300",
    }
})

export default headingText;