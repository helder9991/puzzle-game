import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

    const [game, setGame] = useState([]);
    const [size, setSize] = useState(3);

    // Inicia matriz com numeros
    const startTable = () => {
        let vet = new Array;
        for (let i = 0; i < size*size; i++) {
            vet[i] = i+1;
        }
        vet[8] = '';

        // Embaralha os numeros
        for (let i = 0; i < size*size-1; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [vet[i], vet[j]] = [vet[j], vet[i]];
        }

        setGame(vet);
    }

    useEffect(() => {
        startTable();
    }, [])

    const verify = () => {
        for (let i = 1; i < size*size; i++)
            if (game[i - 1] > game[i])
                return 0
        
        Alert.alert('Parabéns', 'Você conseguiu resolver o puzzle',[
            {
                text: 'Reiniciar',
                onPress: () => startTable()
            },
        ],{cancelable: false})
            
    }

    const move = (position) => {
        // Verifica se é possivel realizar o movimento
        // Método escalonavel
        let vet = [...game];

        if(vet[position-1] === '' ){
            aux = vet[position];
            vet[position] = vet[position-1];
            vet[position-1] = aux;
        }
        else if(vet[position+1] === ''){
            aux = vet[position];
            vet[position] = vet[position+1];
            vet[position+1] = aux;
        }
        else if(vet[position-size] === ''){
            aux = vet[position];
            vet[position] = vet[position-size];
            vet[position-size] = aux;
        }
        else if(vet[position+size] === ''){
            aux = vet[position];
            vet[position] = vet[position+size];
            vet[position+size] = aux;
        }

        setGame(vet);
        verify();
    }

    return (
        <View style={styles.container}>
            <View style={styles.gameContainer}>
            {
                game.map((value, index) => (
                    <View key={index} style={styles.numberContainer}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => move(index)}>
                            <Text style={styles.number}>{value}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            </View>
            <TouchableOpacity onPress={() => startTable()}>
                <Text style={styles.restartButton}>Reiniciar</Text>
            </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberContainer:{
        width: '33%',
        height: '33%',
        backgroundColor: '#add',
        borderWidth: 1,
        borderColor: '#fff',
    },
    numberButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number:{
        color: "#fff",
        fontSize: 36,
    },
    restartButton:{
        color: '#fff',
        fontSize: 20,
        marginTop: 60
    }
});
