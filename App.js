import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import AuthScreen from './src/screens/Auth/Auth';
import EventsScreen from './src/screens/MainTabs/Events/Events';
import configureStore from './src/store/configureStore';
import EventDetailScreen from './src/screens/EventDetail/EventDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import FeedbackScreen from './src/screens/Feedback/Feedback';

const store = configureStore();

//Register Screens

Navigation.registerComponent(
  "sams-club.AuthScreen", 
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "sams-club.EventsScreen", 
  () => EventsScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "sams-club.FeedbackScreen", 
  () => FeedbackScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "sams-club.EventDetailScreen", 
  () => EventDetailScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "sams-club.SideDrawerScreen", 
  () => SideDrawerScreen,
);


//start app

Navigation.startSingleScreenApp({
  screen: {
    screen:"sams-club.AuthScreen",
    navigatorStyle: {
      navBarTranslucent: true,
    }
  },

});