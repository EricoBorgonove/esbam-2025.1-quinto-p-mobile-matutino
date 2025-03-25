import React from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#469BD2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
    },
    button:{
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default HomeScreen;