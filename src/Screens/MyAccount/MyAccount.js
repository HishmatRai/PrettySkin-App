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
    Image,
    ImageBackground
} from "react-native";
import { Entypo, Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import StarRating from './../../Components/StartRating/StartRating'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const MyAccount = (props) => {
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
                <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Entypo name="menu" size={24} color="white" onPress={() => props.navigation.toggleDrawer()} />
                        </TouchableOpacity>
                        <Text style={{ color: "white", letterSpacing: 1, marginLeft: 20, fontSize: 19 }}>My Account</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Image source={require('./../../images/myaccountprofile.png')} style={styles._my_account_profile_images} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Notifications")}>
                            <Ionicons name="md-notifications" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles._myAccountBC_main}>
                            <ImageBackground source={require('./../../images/myAccountBC.png')} style={styles.myAccountBC}>
                                <View style={{ marginTop: 50, marginLeft: 20 }}>
                                    <TouchableOpacity style={styles._message_btn}>
                                        <Feather name="message-circle" size={16} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles._message_btn}>
                                        <MaterialIcons name="my-location" size={16} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles._message_btn}>
                                        <Ionicons name="md-call" size={16} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles._message_btn}>
                                        <Ionicons name="videocam-sharp" size={16} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ margin: 20 }}>
                            <View>
                                <Text style={styles._user_name}>Dr. Olivia Lisa</Text>
                                <Text style={styles._user_des}>Esthetician & Skin care Therapist / Coach</Text>
                            </View>
                            <StarRating />
                            <View>
                                <Text style={styles._user_addres_heading}>Address</Text>
                                <Text style={styles._user_addres}>Clinic Name</Text>
                                <Text style={styles._user_addres}>845 Coffee lane , New York, </Text>
                            </View>
                            <View>
                                <Text style={styles._user_addres_heading}>About Dr. Olivia Lisa</Text>
                                <Text style={styles._user_des2}>I’m a licensed esthetician and a corrective skin care therapist/coach with 8 years of working experience!!!!</Text>
                                <Text style={styles._user_des2}>Not only do I  enjoy providing a fix for your skin challenges, but I love educating each client on PERFECT at home care regimens to maintain a PRETTY healthy well balanced  amazing glow!</Text>
                                <Text style={styles._user_des2}>customizable needs and continuously strive to provide superb skin treatments. Your most certainly guaranteed to have an "AWESOMETASTIC" experience, learning while loads of fun during your skin service.My main goal is  Skin Correction; as I provide the majority of treatments to clients suffering from Cystic Acne, Acne Scarring, Rosacea, Melsma Etc.</Text>
                                <Text style={styles._user_des2}>Be Prepared to have some Fun!!!! Schedule an appointment to come see me and let's get to your PRETTY SKIN FIXt home care regimens to maintain a PRETTY healthy well balanced  amazing glow!
</Text>
                                <Text style={styles._user_des2}></Text>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
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
    _my_account_profile_images: {
        width: 29,
        height: 29,
        borderRadius: 50,
        marginRight: 20,

    },
    _myAccountBC_main: {
        alignSelf: "center",
        width: "100%",
        height: 213,
        borderRadius: 20,
        padding: 1
    },
    myAccountBC: {
        resizeMode: "cover",
        width: "100%",
        height: 213,
        borderRadius: 20,
    },
    _message_btn: {
        elevation: 8,
        borderRadius: 50,
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginBottom: 10
    },
    _user_name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1
    },
    _user_des: {
        color: "#707070",
        fontSize: 15
    },
    _user_addres_heading: {
        color: "white",
        fontSize: 20,
        letterSpacing: 1,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: "bold",
    },
    _user_addres: {
        fontSize: 18,
        color: "#707070",
        letterSpacing: 0.5
    },
    _user_des2: {
        color: "#AEAEAE",
        fontSize: 13,
        marginBottom:10
    }
});

export default MyAccount;