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
let UsersList = [
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
    { userName: "John...", counter: "99+" },
]
const Messages = (props) => {
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
                <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-between", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity>
                            <Entypo name="menu" size={24} color="white" onPress={() => props.navigation.toggleDrawer()} />
                        </TouchableOpacity>
                        <Text style={{ color: "white", letterSpacing: 1, marginLeft: 20, fontSize: 19 }}>Messages</Text>
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
                    <View style={{ marginTop: 30 }}>
                        <View style={styles._search_main}>
                            <TextInput
                                style={styles._input}
                                placeholder="Search Here......"
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity>
                                <Ionicons name="search-outline" size={24} color="#717171" />
                            </TouchableOpacity>
                        </View>
                            <ScrollView horizontal={true}>
                        <View style={styles._all_user_show_main}>
                                {UsersList.map((v, i) => {
                                    return (
                                        <View style={styles._user_main}>
                                            <View>
                                                <TouchableOpacity style={styles.user_profile_main}>
                                                    <Image source={require('./../../images/user_profile.png')} style={styles._profile_image} />
                                                </TouchableOpacity>
                                                <Text style={styles._user_name}>{v.userName}</Text>
                                            </View>
                                            <Text style={styles._counter}>{v.counter}</Text>
                                        </View>
                                    )
                                })}
                        </View>
                            </ScrollView>
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
    _search_main: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    _input: {
        color: "black",
        width: "90%",
        borderRadius: 50,
        paddingLeft: 10
    },
    _all_user_show_main: {
        marginTop: 30,
        flexDirection: "row",
        marginBottom: 100
    },
    _user_main: {
        marginRight: 15
    },
    user_profile_main: {
        width: 64,
        height: 64,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 1,
        alignItems: "center"
    },
    _profile_image: {
        width: 63,
        height: 63,
        borderRadius: 50
    },
    _user_name: {
        color: "white",
        fontSize: 15,
        textAlign: "center"
    },
    _counter: {
        backgroundColor: "#707070",
        fontSize: 10,
        borderRadius: 50,
        alignItems: "center",
        textAlign: "center",
        color: "white",
        width: "50%",
        alignSelf: "center",
        marginTop: -80,
        marginLeft: 50
    }

});

export default Messages;