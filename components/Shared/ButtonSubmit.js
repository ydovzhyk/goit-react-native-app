import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const ButtonSubmit = ({text = '+'}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.btnTitle}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 16,
        marginTop: 27,        
        backgroundColor: "#FF6C00",
        height: 51,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTitle: {
        color: "#FFFFFF",
        fontSize: 16,
    }
});
export default ButtonSubmit;