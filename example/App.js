import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View, TextInput, Text
} from 'react-native';


// import KPTextInput from '../package/KPTextInput'

import KPTextInput from "@iamkoushik/kp-textinput";

const App = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar translucent={true} />

      <View style={{ backgroundColor: '#fff' }}>
        <KPTextInput
          textboxStyle={{
            borderColor: "green", borderWidth: 1,
            borderRadius: 6, paddingHorizontal: 12,
            fontWeight: 'bold', fontSize: 14,
            marginHorizontal: 12
          }}
          placeholder="Email Address"
          textboxvalue={value}
          type={"email-address"}
          secureTextEntry={false}
          onChangeText={(value) => setValue(value)}
          keyboardType={"default"}
          labelplaceholder="Email Address"
        />
      </View>


      {/* <View style={{ backgroundColor: '#fff', marginHorizontal: 12 }}>
        <TextInput
          autoFocus={true}
          style={[styles.textInputStyle, {
            borderColor: "#000",
            borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, fontWeight: 'bold', fontSize: 14
          }]}
          placeholder="Email Address"
          value={value}
          type={"email-address"}
          secureTextEntry={false}
          onChangeText={(value) => setValue(value)}
          keyboardType={"default"}
          labelplaceholder="Email Address"
        />
        <Text
          style={[styles.placeholderText]}>
          Email Address
        </Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  placeholderText: {
    marginLeft: 16,
    marginTop: 3,
    position: 'absolute',
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 13,
  },
  textInputStyle: {
    height: 48, fontSize: 14, marginTop: 12
  }
});

export default App;
