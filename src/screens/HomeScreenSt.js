import React from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import styles from "../../assets/styles/HomeStylesSt";

const HomeScreen = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá Mundo</Text>
            <Text style={styles.subtitle}>Essa é a nossa primeira Tela usando react native</Text>
            <Button
                title="Clique aqui"
                onPress={()=> Alert.alert('Botão pressionado')}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=> Alert.alert('Botão personalizado pressionado')}
            >
                <Text style={styles.buttonText}>Toque aqui</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> Alert.alert('Botão personalizado pressionado')}
            >
                <Text style={styles.buttonText}>Toque aqui</Text>
            </TouchableOpacity>
        </View>
       
    )
}


export default HomeScreen;