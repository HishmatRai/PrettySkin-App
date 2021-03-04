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
} from "react-native";
import { Entypo, Ionicons, MaterialIcons, Zocial } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const LogIn = (props) => {
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
                barStyle="dark-content"
                hidden={false}
                backgroundColor="white"
                translucent={true}
            />
            <View style={styles._main}>
                <TouchableOpacity style={styles._back_icon_btn}>
                    <Ionicons name="md-arrow-round-back" size={24} color="black" />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._logo}>
                        <Entypo name="location" size={100} color="#33cc66" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._input_main}>
                            <View style={styles._email_icons_view}>
                                <MaterialIcons name="email" size={24} color="#777777" />
                            </View>
                            <View style={styles._email_input_view}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Email Address"
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                        <View style={styles._input_main}>
                            <View style={styles._email_icons_view}>
                                <MaterialIcons name="lock" size={24} color="#777777" />
                            </View>
                            <View style={styles._email_input_view}>
                                <TextInput
                                    style={styles._input}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor="black"
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles._forgot_btn}>
                            <Text style={styles._forgot_btn_text}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("LogIn")}>
                        <Text style={styles._button_txt}>SignUP</Text>
                    </TouchableOpacity>
                    <View style={{ marginBottom: 50 }}></View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    _main: {
        margin: 20,
    },
    _back_icon_btn: {
        marginTop: 20,
    },
    _logo: {
        alignItems: "center",
        marginTop: 40,
    },
    _input_main: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        // borderWidth: 1,
        borderRadius: 50,
        alignItems: "center",
        padding: 10,
        marginTop: 20,
    },
    _email_icons_view: {
        // backgroundColor: "red",
        width: "10%",
    },
    _email_input_view: {
        // backgroundColor: "green",
        width: "90%",
    },
    _input: {
        fontWeight: "bold",
        color: "black",
    },
    _forgot_btn: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    _forgot_btn_text: {
        letterSpacing: 1,
    },
    button: {
        backgroundColor: "#33cc66",
        borderRadius: 50,
        width: "100%",
        alignSelf: "center",
        marginTop: 10,
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        letterSpacing: 2,
    },
    _or: {
        textAlign: "center",
        color: "#777777",
        // fontWeight:"bold",
        fontSize: 25,
        marginTop: 10,
    },
    _fb_button: {
        backgroundColor: "#2672cb",
        borderRadius: 50,
        width: "100%",
        alignSelf: "center",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    _fb_button_txt: {
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
        color: "white",
        fontSize: 18,
        letterSpacing: 0.5,
        paddingRight: 10,
    },
});

export default LogIn;