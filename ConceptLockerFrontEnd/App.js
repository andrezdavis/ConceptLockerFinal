
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';


import DetailsSearch from "./screens/DetailsSearch"
import Query from "./screens/Query"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Tutorial from "./screens/Tutorial"
import User from "./screens/User"
import History from "./screens/History"

import {
  StyleSheet,
  View,
} from "react-native";



const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();


const QueryStack = ({route, navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
  }}>
  <Stack.Screen name="Query" component={Query} initialParams={{ itemId: 42 }} options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const DetailsSearchStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
  }}>
  <Stack.Screen name="Details Search" component={DetailsSearch}  options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const LoginStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="Login" component={Login} options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const TutorialStack = ({navigation}) => (

    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
    <Stack.Screen name="Tutorial" component={Tutorial} options={{
                  title:'Concept Locker' }} />
    </Stack.Navigator>
);

const RegisterStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="Register" component={Register} options={{
                title:'Concept Locker' }} />
  </Stack.Navigator>
);
const HistoryStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="History" component={History} options={{
                title:'Concept Locker' }} />
  </Stack.Navigator>
);




export default function App() {
  
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // const [data, setData] = useState([]);

  return (
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Login" activeColor="#0071ff" barStyle={{paddingBottom:15}}>
          <Tabs.Screen name= "Login" component={Login} options={{ tabBarVisible: false, tabBarButton: () => null}}/>
          <Tabs.Screen name= "Register" component={Register} options={{ tabBarVisible: false,tabBarButton: () => null }}/>
          <Tabs.Screen name = "Tutorial" component={Tutorial} option={{ tabBarLabel: 'Tutorial', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-book"} color={color} size={20}/>)}}/>
          <Tabs.Screen name= "Query" component={Query} option={{ tabBarLabel: 'Query', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-home"} color={color} size={20}/>)}}/>
          <Tabs.Screen name= "Details Search" component={DetailsSearch} option={{ tabBarLabel: 'Details Search', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-search"} color={color} size={20}/>)}}/>
          <Tabs.Screen name = "Profile" component={User} option={{ tabBarLabel: 'Profile', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-person"} colosr={color} size={20}/>)}}/>
          <Tabs.Screen name= "History" component={History} options={{ tabBarButton: () => null}}/>

        </Tabs.Navigator>

      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: { height: 40, borderColor: "gray", borderWidth: 1, minWidth: 30 },
});