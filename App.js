import React, {Component, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules, NativeEventEmitter, Button, } from 'react-native';
import {
  MetaMapRNSdk,
} from 'react-native-expo-metamap-sdk';

export default function App(props) {
  useEffect(() => {
    const MetaMapVerifyResult = new NativeEventEmitter(NativeModules.MetaMapRNSdk)
    MetaMapVerifyResult.addListener('verificationSuccess', (data) => console.log(data))
    MetaMapVerifyResult.addListener('verificationCanceled', (data) => console.log(data))
  })
  const handleMetaMapClickButton = (props) => {
    //set 3 params clientId (cant be null), flowId, metadata
    MetaMapRNSdk.showFlow("610b96fb7cc893001b135505", "611101668083a1001b13cc80");
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress = {() => handleMetaMapClickButton()}  title="Click here"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
