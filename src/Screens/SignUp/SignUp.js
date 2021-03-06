import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const SignUp = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="black"
                translucent={true}
            />
            <View style={styles._main}>
                <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={24} color="white" onPress={() => props.navigation.toggleDrawer()} />
                    </TouchableOpacity>
                    <Text style={{ color: "white", letterSpacing: 1, marginLeft: 20, fontSize: 19 }}>Create Account</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._heading}>PRETTY PRETTY SKIN</Text>
                    <View style={styles._logo_main}>
                        <Image source={require('./../../images/signuplogo.png')} style={styles._logo} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._input_main}>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles._email_input_view3}>
                                    <TextInput
                                        style={styles._input}
                                        placeholder="First Name"
                                        placeholderTextColor="white"
                                    />
                                </View>
                                <View style={styles._email_input_view4}>
                                    <TextInput
                                        style={styles._input}
                                        placeholder="Last Name"
                                        placeholderTextColor="white"
                                    />
                                </View>
                            </View>
                            <View style={styles._email_input_view}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                />
                            </View>
                            <View style={styles._email_input_view2}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Password"
                                    placeholderTextColor="white"
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Home")}>
                        <Text style={styles._button_txt}>Create account</Text>
                    </TouchableOpacity>


                    <View style={styles._create_account_main}>
                        <Text style={styles._create_account_text}>Already have an account? </Text>
                        <TouchableOpacity style={styles._create_account_btn} onPress={() => props.navigation.navigate("LogIn")}>
                            <Text style={styles._create_account_btn_text}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 50 }}></View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    _main: {
        margin: 20,
    },
    _heading: {
        color: "white",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        textAlign: "center",
        fontSize: 35,
        marginTop: 20
    },
    _logo_main: {
        alignItems: "center",
        marginTop: 20,
    },
    _logo: {
        width: 139,
        height: 139,
        alignSelf: "center"
    },
    _input_main: {
        borderRadius: 5,
        backgroundColor: "black",
        alignItems: "center",
        marginTop: 20,
    },
    _email_input_view: {
        width: "100%",
        borderColor: "white",
        borderWidth: 1,
        padding: 10
    },
    _email_input_view2: {
        width: "100%",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: "white",
        borderWidth: 1,
        padding: 10

    },
    _email_input_view3: {
        width: "50%",
        borderTopLeftRadius: 5,
        borderColor: "white",
        borderWidth: 1,
        padding: 10

    },
    _email_input_view4: {
        width: "50%",
        borderTopRightRadius: 5,
        borderColor: "white",
        borderWidth: 1,
        padding: 10

    },
    _input: {
        fontWeight: "bold",
        color: "white",
    },

    button: {
        backgroundColor: "white",
        borderRadius: 5,
        width: "100%",
        alignSelf: "center",
        marginTop: 30,
        alignItems: "center"
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        color: "black",
        fontSize: 18,
        letterSpacing: 1,
    },


    _create_account_main: {
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        alignSelf: "center",
        marginTop: 30
    },
    _create_account_text: {
        color: "white",
        fontSize: 16
    },
    _create_account_btn: {

    },
    _create_account_btn_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default SignUp;