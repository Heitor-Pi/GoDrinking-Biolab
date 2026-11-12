import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerAvailableSizes:{
        gap: 10
    },
    textTitle:{
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite
    },
    textHighlight:{
        color: colors.colorHotDrink
    },
    scrollView:{
        gap: 10
    }
})
