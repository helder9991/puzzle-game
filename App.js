import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    const [game, setGame] = useState([]);

    const startTable = () => {
        let mat = new Array;
        for (let i = 0; i < 3; i++) {
            mat[i] = [i*3 + 1, i*3 + 2, i*3 + 3];
        }
        mat[2][2] = '';
        setGame(mat);
    }

    useEffect(() => {
        startTable();
    }, [])

    return (
        <View style={styles.container}>
            {
                game.map((value, index) => {
                    if(index <= 2){
                        return(
                            <View key={index} style={styles.line1}>
                                <Text>{ value }</Text>
                            </View>
                        )
                    }else if(index <= 5){
                        return(
                            <View key={index} style={styles.line2}>
                                <Text>{ value }</Text>
                            </View>
                        )
                    }else{
                        return(
                            <View key={index} style={styles.line3}>
                                <Text>{ value }</Text>
                            </View>
                        )
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
