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
});

export default Memberlist;