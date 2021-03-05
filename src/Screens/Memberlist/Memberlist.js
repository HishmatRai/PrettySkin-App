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
import { block } from "react-native-reanimated";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
let MemberList2 = [
    { userName: "King Zack", member: "Member" },
    { userName: "King Zack", member: "Member" },
    { userName: "King Zack", member: "Member" },
    { userName: "King Zack", member: "Member" },
]
const Memberlist = (props) => {
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
                        <Text style={{ color: "white", letterSpacing: 1, marginLeft: 20, fontSize: 19 }}>Member list</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Image source={require('./../../images/myaccountprofile.png')} style={styles._my_account_profile_images} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="md-notifications" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 20, marginTop: 30 }}>
                        {MemberList2.map((v, i) => {
                            return (
                                <View style={styles._card_main}>
                                    <View style={styles._profile_main}>
                                        <Image source={require('./../../images/user_profile.png')} style={styles._profile} />
                                    </View>
                                    <View style={styles._user_name_main}>
                                        <Text style={styles._user_name}>{v.userName}</Text>
                                        <Text style={styles._member}>{v.member}</Text>
                                    </View>
                                    <View style={styles._view_more_main}>
                                        <TouchableOpacity>
                                            <Feather name="more-horizontal" size={30} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}

                        <View style={styles._add_new_member_main}>
                            <TouchableOpacity style={styles._add_new_member_btn}>
                                <Ionicons name="ios-add-circle" size={34} color="white" />
                                <Text style={styles._add_new_member_btn_text}>Add New Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    _card_main: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        paddingBottom: 30,
        marginBottom:20
    },
    _profile_main: {
        width: "20%",
        alignItems: "center"
    },
    _user_name_main: {
        width: "70%",
    },
    _view_more_main: {
        width: "10%",
    },
    _user_name: {
        color: "white",
        marginLeft: 15,
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    _member: {
        color: "white",
        marginLeft: 15,
        fontSize: 14,
        letterSpacing: 0.5

    },
    _profile: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 1
    },
    _add_new_member_main: {
        width: "60%",
        alignSelf: "center",
        marginTop: 20,
        marginBottom:20
    },
    _add_new_member_btn: {
        flexDirection: "row",
        alignItems: "center"
    },
    _add_new_member_btn_text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginLeft: 10
    }

});

export default Memberlist;