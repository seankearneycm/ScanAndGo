import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const eventList = (props) => {
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}//data must be an array
            renderItem={(info) => (
                <ListItem 
                placeName={info.item.name}
                placeImage={info.item.image}
                location={info.item.location}
                endTime={info.item.endTime}
                onItemPressed={() => props.onItemSelected(info.item.key)} 
                onItemDeleted={() => props.onItemDeleted(info.item.key)}/>
            )}
            />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width:"100%",
      },
});

export default eventList;
