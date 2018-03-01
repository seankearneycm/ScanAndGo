import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("map", 30),
        Icon.getImageSource("add-location", 30),
        Icon.getImageSource("menu", 25),
        Icon.getImageSource("sync", 30),
        Icon.getImageSource("search", 25),
    ]).then(sources => {
        Navigation.startSingleScreenApp({
            screen: 
                {
                    screen: "sams-club.EventsScreen",
                    title:"Events",
                    navigatorStyle:{
                        navBarButtonColor: "white",
                        navBarBackgroundColor: "#156DAB",
                        navBarTextColor: "white",
                        navBarButtonFontWeight: '300',
                        backButtonTitle:'',
                    },
                    icon:sources[0],
                    navigatorButtons: {
                        leftButtons: [{
                            id:"drawerToggle",
                            icon:sources[2],
                            title:"Menu"
                        }],
                        rightButtons: [{
                            id:"searchButton",
                            icon:sources[4],
                            title:"Search"
                        }],
                    }, 
                    navigationOptions: {
                        headerBackTitle: ''
                    },
                },
            drawer: {
                left: {
                    screen: "sams-club.SideDrawerScreen",
                },
                style: {
                    drawerShadow: true, // optional, add this if you want a side menu drawer shadow
                    contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
                    leftDrawerWidth: 80, // optional, add this if you want a define left drawer width (50=percent)
                    rightDrawerWidth: 80 // optional, add this if you want a define right drawer width (50=percent)
                },
            },
        });
    });
};

export default startTabs;
