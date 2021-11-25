/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProductScreen from './screens/ProductScreen';
import UserScreen from './screens/UserScreen';
import Icon from 'react-native-vector-icons/Ionicons';
//import {Icon} from 'react-native-elements';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MyTab} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name == ' ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == '  ') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name == '   ') {
            iconName = focused ? 'list' : 'list-outline';
          }else if (route.name == '    ') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Icon name={iconName} type='font-awsome' size={size} color={color} />;
        },

          tabBarActiveTintColor: '#8134AF',
          tabBarInactiveTintColor: '#222',
      })}>
      <Tab.Screen name=" " component={HomeScreen} />
      <Tab.Screen name="  " component={SearchScreen} />
      <Tab.Screen name="   " component={ProductScreen} />
      <Tab.Screen name="    " component={UserScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={{fontSize: 20}}>hello</Text>
    // </View>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>

  );
};

export default App;
