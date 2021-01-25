import React from 'react'
import { StyleSheet, TextInput, Dimensions, ScrollView, View, Text, Button } from 'react-native'
export const Etabli = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nouvel outil"
                    placeholderTextColor="#005C4A"
                />
                <View style={styles.containerButton}>

                    <Button
                        title="Ajouter"
                        color="#005C4A"
                        accessibilityLabel="Ajouter un outil"
                        style={styles.button} />

                </View>
            </View>
        </ScrollView>
    )
}

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:"center"
    },
    input: {
        padding: 10,
        margin: 5,
        borderColor: "gray"

    },
    containerButton: {
        width: vw / 2,
        margin: 15,

    },
    button: {
        borderRadius: 15,
        alignSelf: "center"
    }


})