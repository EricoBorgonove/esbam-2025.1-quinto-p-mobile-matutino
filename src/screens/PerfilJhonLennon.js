import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PerfilJhonLennon = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jhon Lennon</Text>
            <Image 
            source={require('../../assets/images/jhon-lennnon.jpeg')}
            style={styles.imagem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20
    }
})

export default PerfilJhonLennon;