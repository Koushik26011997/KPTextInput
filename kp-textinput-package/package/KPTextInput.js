import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

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
    showPassword = isPassword ? true : false,
    /////////////////////////////
    // Label Props Starts Here //
    /////////////////////////////
    labelplaceholder = "",
    customlabelStyle = {},
    labelBackgroundColor = '#fff',
    labelTextColor = '#000',
    isShowLabel = true
}) => {
    const [show, setShow] = useState(isPassword);
    return (
        <View>
            <TextInput
                autoFocus={autoFocus}
                style={[styles.textInputStyle, textboxStyle, { paddingRight: isPassword ? 48 : 12, backgroundColor: !editable ? '#f1f1f1' : null }]}
                placeholder={textboxplaceholder}
                onBlur={onBlur}
                value={textboxvalue}
                secureTextEntry={show}
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
            {showPassword ? (
                <TouchableOpacity
                    style={styles.searchIcon}
                    onPress={() => setShow(!show)}>
                    {show ? (
                        <Image source={require("../images/visibility.png")} style={styles.iconStyle} />
                    ) : (
                        <Image source={require("../images/invisible.png")} style={styles.iconStyle} />
                    )}
                </TouchableOpacity>
            ) : null}
            {isShowLabel && <Text
                style={[styles.placeholderText, customlabelStyle, { backgroundColor: labelBackgroundColor, color: labelTextColor }]}>
                {labelplaceholder}
            </Text>}
        </View>
    )
}

export default KPTextInput;

