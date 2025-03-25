import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreenStNav from './src/screens/HomeScreenStNav';
import Details from './src/screens/Details';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name= 'Home' component = {HomeScreenStNav}
                />
                <Stack.Screen
                    name='Details' component = {Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}