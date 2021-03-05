import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import {
    LogIn,
    SignUp,
    MyAccount,
    Memberlist,
    Announcement,
    Messages
} from './../Screens/index';
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    Ionicons,
    Entypo,
    SimpleLineIcons,
    MaterialIcons,
    FontAwesome5,
    FontAwesome
} from "@expo/vector-icons";
import { View, Text, Button, Image, StyleSheet } from 'react-native'
const Stack = createStackNavigator();
function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <View style={styles._profile_main}>
                <Image source={require("./../images/user_profile.png")} style={styles._profile_image} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles._user_name}>Evan Smith</Text>
                    <Text style={styles._user_address}>Jackson Height, NY, USA</Text>
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    icon={() => (
                        <MaterialIcons name="message" size={24} color="white" />
                    )}
                    label="Message Us"
                    onPress={() => props.navigation.closeDrawer()}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => (
                        <FontAwesome5 name="shopping-bag" size={24} color="white" />
                    )}
                    label="Shop"
                    onPress={() => props.navigation.navigate("withdraw")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => (
                        <MaterialIcons name="wallet-membership" size={24} color="white" />
                    )}
                    label="Member list"
                    onPress={() => props.navigation.navigate("toFriendSendScreen")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => (
                        <FontAwesome name="check-square-o" size={24} color="white" />
                    )}
                    label="Reminder / Task"
                    onPress={() => props.navigation.closeDrawer()}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => <MaterialIcons name="account-box" size={24} color="white" />}
                    label="My Account"
                    onPress={() => props.navigation.navigate("MyAccount")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => <MaterialIcons name="forum" size={24} color="white" />}
                    label="Social Forum"
                    onPress={() => props.navigation.navigate("profileScreen")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => <FontAwesome5 name="file-invoice" size={24} color="white" />}
                    label="Invoice"
                    onPress={() => props.navigation.navigate("profileScreen")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => <MaterialIcons name="announcement" size={24} color="white" />}
                    label="Announcement "
                    onPress={() => props.navigation.navigate("profileScreen")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
                <DrawerItem
                    icon={() => <MaterialIcons name="logout" size={24} color="white" />}
                    label="Log Out"
                    onPress={() => props.navigation.navigate("profileScreen")}
                    labelStyle={{ color: "white", marginLeft: 0, fontSize: 20, letterSpacing: 1 }}
                />
            </DrawerContentScrollView>
        </View>
    );
}

function Navigation() {
    return (

        <Stack.Navigator>
            {/* <Stack.Screen
                name="DrawerNavigator"
                component={LogIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyAccount"
                component={MyAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                    name="Memberlist"
                    component={Memberlist}
                    options={{ headerShown: false }}
                />
            <Stack.Screen
                    name="Announcement"
                    component={Announcement}
                    options={{ headerShown: false }}
                /> */}
            <Stack.Screen
                    name="Messages"
                    component={Messages}
                    options={{ headerShown: false }}
                />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
                drawerStyle={{ width: "100%" }}
                overlayColor="grey"
            >
                <Drawer.Screen
                    name="Home"
                    component={Navigation}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    _profile_main: {
        marginTop: 50,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    _user_name: {
        color: "white",
        fontSize: 17
    },
    _user_address: {
        color: "#8B8B8B",
        fontSize: 15
    },
    _profile_image: {
        width: 63,
        height: 63,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 1
    }
})
export default DrawerNavigator;