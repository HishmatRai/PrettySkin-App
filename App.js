import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import Getstarted from './src/Screens/GetStarted/GetStarted'
export default function App(props) {
  return (
    <View style={styles.container}>
      {/* <Getstarted /> */}
   < Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
