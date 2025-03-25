import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from './src/screens/HomeScreen'
import PerfilJhonLennon from './src/screens/PerfilJhonLennon'

export default function App(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <PerfilJhonLennon/>
        </SafeAreaView>
    )
}