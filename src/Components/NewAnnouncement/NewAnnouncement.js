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
const NewAnnouncement = (props) => {
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
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._announcement_main}>
                        <TextInput
                            style={styles._input}
                            placeholder="Type your announcement..........."
                            placeholderTextColor="black"
                        />
                    </View>
                    <Text style={styles._note}>Update your memeber with a new announcement, and send it as push notification to their mobile.</Text>
                    <View style={styles._button_main}>
                        <TouchableOpacity style={styles._cancel_btn}>
                            <Text style={styles._cancel_btn_text}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._save_btn}>
                            <Text style={styles._save_btn_text}>Save</Text>
                        </TouchableOpacity>
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
        marginTop: 40,
    },
    _announcement_main: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        alignItems: "center"
    },
    _input: {
        color: "black",
        width: "100%",
        borderRadius: 50,
        paddingLeft: 10
    },
    _note: {
        fontSize: 15,
        color: "#8B8B8B",
        marginTop: 20
    },
    _button_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",

    },
    _cancel_btn: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft:15,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:15,
        width:"30%",
        alignItems:"center"
    },
    _cancel_btn_text: {
        color: "white",
        fontWeight:"bold",
        fontSize:19
    },
    _save_btn: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingLeft:15,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:15,
        width:"30%",
        alignItems:"center"
    },
    _save_btn_text: {
        color: "black",
        fontWeight:"bold",
        fontSize:19
    }

});

export default NewAnnouncement;