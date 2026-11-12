import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerStartScreen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        backgroundColor: colors.colorDarkPurple,        
    },
    textWelcome:{
        color: colors.colorGray,
        fontFamily: fonts.fontBody,
        fontSize: 20,
        textAlign: "center"
    }
})
