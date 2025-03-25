import React from "react";
import { StyleSheet } from "react-native";

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

export default styles;