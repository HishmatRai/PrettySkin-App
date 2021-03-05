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
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
let PostData = [
    { accountName: "PRETTY PRETTY SKIN", postTime: "3 days ago", postTitle: "HEY PRETTIES", postDes: "Deposit codes; are sent via mail", viewsCount: "55 views" },
    { accountName: "PRETTY PRETTY SKIN", postTime: "3 days ago", postTitle: "HEY PRETTIES", postDes: "Deposit codes; are sent via mail", viewsCount: "55 views" },
    { accountName: "PRETTY PRETTY SKIN", postTime: "3 days ago", postTitle: "HEY PRETTIES", postDes: "Deposit codes; are sent via mail", viewsCount: "55 views" },
    { accountName: "PRETTY PRETTY SKIN", postTime: "3 days ago", postTitle: "HEY PRETTIES", postDes: "Deposit codes; are sent via mail", viewsCount: "55 views" },
]
const AnnouncementHistory = (props) => {
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
                    <View>
                        <Text style={styles._heading}>This Month</Text>
                        {PostData.map((v, i) => {
                            return (
                                <View style={styles._card_main}>
                                    <View style={styles._card_header_mian}>
                                        <Image source={require('./../../images/_annou_account_profile.png')} style={styles._annou_account_profile} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles._annou_account_name}>{v.accountName}</Text>
                                            <Text style={styles._post_time}>{v.postTime}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles._post_title}>{v.postTitle}</Text>
                                    <Text style={styles._post_des}>{v.postDes}</Text>
                                    <View style={styles._views_main}>
                                        <TouchableOpacity style={styles._views_user}>
                                            <Image source={require('./../../images/see_views_prfile.png')} style={styles.see_views_prfile} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles._views_user2}></TouchableOpacity>
                                        <TouchableOpacity style={styles._views_user2}></TouchableOpacity>
                                        <Text style={styles._views_count}></Text>
                                    </View>
                                </View>
                            )
                        })}

                    </View>
                    <View style={{marginBottom:50}}></View>
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
        marginTop: 20,
    },
    _heading: {
        fontSize: 15,
        color: "#BCBCBC"
    },
    _card_main: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        marginTop: 10
    },
    _card_header_mian: {
        flexDirection: "row"
    },
    _annou_account_profile: {
        width: 46,
        height: 46,
        borderRadius: 50,
    },
    _annou_account_name: {
        fontSize: 18,
        color: "black",
    },
    _post_time: {
        fontSize: 12,
        color: "#A4A0A0"
    },
    _post_title: {
        fontSize: 16,
        color: 'black',
        marginTop: 20
    },
    _post_des: {
        fontSize: 15,
        color: "black",
        marginTop: 20,
        marginBottom: 20
    },
    see_views_prfile: {
        width: 24,
        height: 24,
        borderRadius: 50
    },
    _views_user: {
        width: 24,
        height: 24,
        borderRadius: 50
    },
    _views_user2: {
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: "#979797",
        marginLeft: -8
    },
    _views_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _views_count: {
        fontSize: 12,
        color: "#A4A0A0",
        marginLeft: 10
    }
});

export default AnnouncementHistory;