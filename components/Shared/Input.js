import React from 'react';
import { StyleSheet, View, TextInput } from "react-native";

const Input = ({placeholder = ''}) => {

    const [text, onChangeText] = React.useState("");

    return (
        <View style={styles.inputBackground}>
            <TextInput 
                style={styles.input} 
                textAlign={'left'} 
                placeholder={placeholder} 
                value={text} 
                onChangeText={onChangeText}
                maxLength={40} 
                placeholderTextColor={"#BDBDBD"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputBackground:{
        marginBottom: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
    },
    input: {
        marginHorizontal: 16,
        height: 50,
        fontSize: 16,
    },
});
export default Input;