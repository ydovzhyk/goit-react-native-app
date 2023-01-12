import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';


const initialState = {
    login: '',
    email: '',
    password: ''
}
const RegistrationScreen = ({navigation}) => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

    const clearInput = () => {
        console.log(state);
        setState(initialState);
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={require('../assets/images/photoBG.jpg')}
                >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style= {styles.registerContainer}>
                    <View style={{...styles.registerBox, marginBottom: isShowKeyboard ? 65: 0}}>
                        <View style={styles.photoBox}>
                            <View style={styles.photoPlace}></View>
                            <TextInput 
                                style={styles.photoAdd} 
                                type="file"
                                accept="image/png, image/jpeg"
                                placeholder="+"
                                placeholderTextColor="#FF6C00"
                                multiple
                            />
                        </View>

                    <Text style={styles.boxTitle}>Registration</Text>

                    <View style={styles.form}>
                        <View style={styles.inputBackground}>
                            <TextInput 
                                style={styles.inputForm} 
                                placeholder={'Login'} 
                                maxLength={40}
                                placeholderTextColor={"#BDBDBD"}
                                value={state.login}
                                onFocus={() => setIsShowKeyboard(true)}
                                onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}
                            />
                        </View>
                        <View style={styles.inputBackground}>
                            <TextInput 
                                style={styles.inputForm} 
                                placeholder={'Email'} 
                                maxLength={40}
                                placeholderTextColor={"#BDBDBD"}
                                value={state.email}
                                onFocus={() => setIsShowKeyboard(true)}
                                onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                            />
                        </View>
                        <View style={styles.inputPassword} >
                            <View style={styles.inputBackground}>
                                <TextInput 
                                    style={styles.inputForm} 
                                    placeholder={'Password'} 
                                    maxLength={40} 
                                    secureTextEntry={true}
                                    placeholderTextColor={"#BDBDBD"}
                                    value={state.password}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                                />
                            </View>

                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.btnPassword}
                            >
                                <Text style={styles.btnPasswordTitle}>Show</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            activeOpacity={0.8} 
                            style={styles.btn}
                            onPress={clearInput}
                        >
                            <Text style={styles.btnTitle}>Register</Text>
                        </TouchableOpacity>
                    </View>
            
                    <TouchableOpacity
                        style={styles.navLoginBtn}
                        onPress={() => {
                            navigation.navigate('Login', {name: 'login'});
                        }}
                    >
                        <Text style={styles.navLoginText}>Already have an account? Enter</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
                </ImageBackground>
            <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    registerContainer: {
        display: "flex",
        justifyContent: "flex-end",
        height: 750,
    },
    registerBox: {
        display: "flex",
        justifyContent: 'flex-end',
        height: 549,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    boxTitle: {
        marginBottom: 33,
        textAlign: "center",
        fontSize: 30,
    },
    photoBox: {
        marginBottom: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    photoPlace: {
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    photoAdd:{
        marginLeft: -15,
        marginTop: 81,
        width: 25,
        height: 25,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FF6C00",
        textAlign: "center",
        fontSize: 21,
    },
    form: {
        marginBottom: 16,
    },
    inputBackground: {
        marginBottom: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
    },
    inputForm: {
        marginHorizontal: 16,
        height: 50,
        fontSize: 16,
        textAlign: 'left',
    },
    inputPassword: {
        display: "flex",
        position: "relative",
    },
    btnPassword: {
        position:"absolute",
        alignItems: "center",
        marginTop: 14,
        marginHorizontal: 16,
        marginRight: 20,
        right: 0,
        width: 60,
    },
    btnPasswordTitle: {
        fontSize: 16,
        color: "#1B4371",
    },
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
    },
    navLoginBox:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    navLoginText: {
        color: "#1B4371",
        fontSize: 16,
    },
    navLoginBtn: {
        alignItems: "center",
        marginBottom: 78,
    }
});

export default RegistrationScreen;