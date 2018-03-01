import { ADD_PLACE, DESELECT_PLACE, DELETE_PLACE, SELECT_PLACE } from '../actions/actionTypes'
import placeImage from './actions/lionArt.jpeg';

const initialState = {
    places: [
        {key:1, name: 'Yogurt Demo', 
        image:require('../../assets/yogurt.jpeg'), 
        imageWide:require('../../assets/yogurt-wide.jpeg'), 
        location:"Dairy", endTime:"2:00", 
        description:"Learn about the new line of yogurt from Chobani.  Healthy and greaty tasting.  Flavors range from blueberry, strawberry, mango and orange "},

        {key:2, name: 'Wine Tasting Demo', 
        image:require('../../assets/wine.jpeg'),
        imageWide:require('../../assets/wine-wide.jpeg'), 
        location:"Aisle 3", endTime:"3:00", 
        description:"Engage consumers in looking at and sampling in-store products.",},

        {key:3, name: 'Cookie Cheesecake Demo', 
        image:require('../../assets/cookie-cheesecake.jpeg'), 
        imageWide:require('../../assets/cookie-cheesecake-wide.jpeg'),  
        location:"Bakery", endTime:"4:00", 
        description:"Engage consumers in looking at and sampling in-store products.",},

        {key:4, name: 'Cheese and Cracker Demo', 
        image:require('../../assets/cheez-it.jpeg'), 
        imageWide:require('../../assets/cheez-it-wide.jpeg'),  
        location:"Produce", endTime:"4:00", 
        description:"Engage consumers in looking at and sampling in-store products.",}
    ],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: placeImage
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter( place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace:null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key == action.placeKey
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace:null
            };
        default:
            return state;
    }
};

export default reducer;