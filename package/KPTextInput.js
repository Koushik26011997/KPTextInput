import React from "react";
import { Text, View, TextInput } from 'react-native';

import styles from "./KPTextInput.style.js";

const KPTextInput = ({
    textboxplaceholder = "",
    onChangeText = () => { },
    onBlur = () => { },
    textboxvalue = '',
    isPassword = false,
    keyboardType = 'default',
    textboxStyle = {},
    autoFocus = true,
    multiline = false,
    numberOfLines = 1,
    editable = true,
    maxLength = 100,
    allowFontScaling = true,
    placeholderTextColor = "gray",
    /////////////////////////////
    // Label Props Starts Here //
    /////////////////////////////
    labelplaceholder = "",
    customlabelStyle = {},
    labelBackgroundColor = '#fff',
    labelTextColor = '#000',
    ishowLabel = true
}) => {
    return (
        <View>
            <TextInput
                autoFocus={autoFocus}
                style={[styles.textInputStyle, textboxStyle]}
                placeholder={textboxplaceholder}
                onBlur={onBlur}
                value={textboxvalue}
                secureTextEntry={isPassword}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
                editable={editable}
                maxLength={maxLength}
                allowFontScaling={allowFontScaling}
                placeholderTextColor={placeholderTextColor}
            />
            {ishowLabel && <Text
                style={[styles.placeholderText, customlabelStyle, { backgroundColor: labelBackgroundColor, color: labelTextColor }]}>
                {labelplaceholder}
            </Text>}
        </View>
    )
}

export { KPTextInput };
