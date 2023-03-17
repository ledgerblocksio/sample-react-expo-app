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
    // MetaMapRNSdk.showFlow("610b96fb7cc893001b135505", "611101668083a1001b13cc80");
    let data = {params1: "123456"};
    MetaMapRNSdk.showFlow("610b96fb7cc893001b135505", "611101668083a1001b13cc80", data);
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

// import React, {Component, useEffect} from 'react';
// import {
//   NativeModules,
//   NativeEventEmitter,
//   Button,
//   View
// } from 'react-native';

// // import {
// //   MetaMapRNSdk,
// // } from 'react-native-metamap-sdk';
// import {
//   MetaMapRNSdk,
// } from 'react-native-expo-metamap-sdk';


// function App(props) {

//     useEffect(() => {
//         const MetaMapVerifyResult = new NativeEventEmitter(NativeModules.MetaMapRNSdk)
//         MetaMapVerifyResult.addListener('verificationSuccess', (data) => console.log(data))
//         MetaMapVerifyResult.addListener('verificationCanceled', (data) => console.log(data))
//     })
//     const handleMetaMapClickButton = (props) => {

//             //set 3 params clientId (cant be null), flowId, metadata
//          var yourMetadata = { "param1": "value1", "param2": "value2" }
//          MetaMapRNSdk.showFlow("610b96fb7cc893001b135505", "611101668083a1001b13cc80", yourMetadata);
//       }

//     return (
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'powderblue',
//             }}>
//             <Button onPress = {() => handleMetaMapClickButton()}  title="Click here"/>
//           </View>
//         );
// }
// export default App;