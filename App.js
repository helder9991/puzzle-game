import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

    const [game, setGame] = useState([]);

    const startTable = () => {
        let vet = new Array;
        for (let i = 0; i < 9; i++) {
            vet[i] = i+1;
        }
        vet[8] = '';
        setGame(vet);
    }

    useEffect(() => {
        startTable();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.gameContainer}>
            {
                game.map((value, index) => (
                    <View key={index} style={styles.numberContainer}>
                        <TouchableOpacity>
                            <Text style={styles.number}>{value}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameContainer:{
        borderWidth: 1,
        borderColor: 'red',
        width: '80%',
        height: '60%',
        backgroundColor: '#fa8',
        flexDirection:'row',
        flexWrap: 'wrap', 
    },
    numberContainer:{
        width: '33%',
        height: '33%',
        backgroundColor: '#add',
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    number:{
        color: "#fff",
        fontSize: 36,
    }
});
