import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, PixelRatio, TextInput } from 'react-native';

import styles from "./KPTextInput.style.js";

const KPTextInput = ({
    textboxplaceholder = "",
    onChangeText = () => { },
    onBlur = () => { },
    textboxvalue = '',
    secureTextEntry = false,
    keyboardType = 'default',
    textboxStyle = {},
    autoFocus = true,
    multiline = false,
    numberOfLines = 1,
    editable = true,
    // Label Props Start Here
    labelplaceholder = "",
    customlabelStyle = {},
}) => {
    return (
        <View>
            <TextInput
                autoFocus={autoFocus}
                style={[styles.textInputStyle, textboxStyle]}
                placeholder={textboxplaceholder}
                onBlur={onBlur}
                value={textboxvalue}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
                editable={editable}
            />
            <Text
                style={[styles.placeholderText, customlabelStyle]}>
                {labelplaceholder}
            </Text>
        </View>
    )
}

export default KPTextInput;
