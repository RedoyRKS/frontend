import { Component } from "react";
import { StyleSheet,View,Text } from "react-native";

const TestComponent = () => {
    return(
        <View style={style.ComponentContainer}>
            <Text>Redoy</Text>
        </View>
    )

}
const style = StyleSheet.create({
    ComponentContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default TestComponent;