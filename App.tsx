import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import ArticleDetails from './Screens/ArticleDetails';


import { NavigationContainer } from '@react-navigation/native';
import SlidersScreen from './Screens/SlidersScreen';
import TeslaNews from './Screens/TeslaNews';
import BusinessNews from './Screens/businessNews'
import domainsNews from './Screens/domainsNews'
import AppleNews from './Screens/appleNews'
import TechNews from './Screens/TechNews'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      <Stack.Screen name="SlidersScreen" component={SlidersScreen} />
      <Stack.Screen name="TeslaNews" component={TeslaNews} />
      <Stack.Screen name="BusinessNews" component={BusinessNews} />
      <Stack.Screen name="domainsNews" component={domainsNews} />
      <Stack.Screen name="appleNews" component={AppleNews} />
      <Stack.Screen name="TechNews" component={TechNews} />

    </Stack.Navigator>

    </NavigationContainer>
  )  
}
