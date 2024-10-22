import { Text, View } from "react-native";
import CategoryScreen from './screen/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealOverview from './screen/MealOverview';
import MealDetail from './screen/MealDetail';
import FavouriteScreen from './screen/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
// import FavouriteContextProvider from './store/FavoContext';
import { Provider } from 'react-redux'
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Index() {

  function DrawerFunction() {
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#cccccc" },
      drawerActiveBackgroundColor: "#fff",
      drawerActiveTintColor: "black",
      drawerInactiveTintColor: "white",
      drawerContentStyle: { backgroundColor: "#f5428d" },
      drawerLabelStyle: "black",

    }}>
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{
        drawerIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)
      }} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{
        drawerIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />)
      }} />
    </Drawer.Navigator>
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer independent="true">
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",

            contentStyle: { backgroundColor: "#cccccc" },
          }}>
            <Stack.Screen name="Drawer" component={DrawerFunction} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MealOverview" component={MealOverview} />
            <Stack.Screen name="MealDetail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>


    </>

  );
}
