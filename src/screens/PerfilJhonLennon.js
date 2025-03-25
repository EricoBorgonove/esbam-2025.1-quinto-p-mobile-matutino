import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PerfilJhonLennon = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jhon Lennon</Text>
            <Image 
                source={require('../../assets/images/jhon-lennnon.jpeg')}
                style={styles.imagem}
            />
            <TouchableOpacity
                onPress={()=> Alert.alert('Imagem Clicada')}
            >
            <Image
                source={require('../../assets/images/jhon.jpeg')}
                style={styles.imagem} 
                />
            </TouchableOpacity>
            <Image
                source={{uri: 'https://www.digitalmusicnews.com/wp-content/uploads/2024/10/estate_of_john_lennon_taps_ppl_to_manage_neighboring_rights_collections-768x432.png'}}
                style={{width: 100, height: 100}}
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