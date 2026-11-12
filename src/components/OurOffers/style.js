import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerOurOffers:{
        gap: 10
    },
    textOurOffers:{
        color: colors.colorWhite,
        fontSize: 25,
        fontFamily: fonts.fontTitle,
        fontWeight: "700"
    },
    textHighlight:{
        color: colors.colorHotDrink
    },
    scrollContent:{
        gap: 15
    }
})