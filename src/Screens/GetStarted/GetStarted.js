import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Dimensions, Image, Text } from "react-native";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const GetStarted = (props) => {
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
    <View style={styles.container} >
      <ImageBackground source={require('./../../images/backimage.png')} style={styles._image}>
        <Image source={require('./../../images/logo.png')} style={styles._logo} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  _image: {
    flex: 1,
    resizeMode: 'cover',
    height: "100%"
  },
  _logo: {
    width: 300,
    height: 300,
    marginTop: "70%",
    alignSelf: "center"
  },
});

export default GetStarted;