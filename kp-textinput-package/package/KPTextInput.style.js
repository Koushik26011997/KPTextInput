import { StyleSheet } from "react-native";

export default StyleSheet.create({
    placeholderText: {
        marginLeft: 16,
        marginTop: 4,
        position: 'absolute',
        paddingHorizontal: 4,
        fontSize: 13
    },
    textInputStyle: {
        fontSize: 16,
        height: 48,
        borderWidth: 1, borderRadius: 6,
        marginTop: 12, borderColor: "#000",
        paddingHorizontal: 12
    },
    searchIcon: {
        position: 'absolute',
        right: 18,
        top: 24,
    },
    iconStyle: { width: 24, height: 24, resizeMode: 'contain' }
});
