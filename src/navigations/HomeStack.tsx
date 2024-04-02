import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParams } from './config';
import Home from '../screens/Home';
import AnimalDetails from '../screens/root/AnimalDetails';
import Filter from '../screens/root/Filter';

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AnimalDetails' component={AnimalDetails}/>
        <Stack.Screen name='Filter' component={Filter}/>
    </Stack.Navigator>
  )
}

export default HomeStack