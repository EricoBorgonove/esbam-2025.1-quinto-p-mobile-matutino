import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../../assets/styles/HomeStylesSt";

export default function Details ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>

            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}