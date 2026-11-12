import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const Styles = StyleSheet.create({
    container:{
        gap: 10
    },
    textOurHighlights:{
        color: colors.colorWhite,
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle
    },
    textHighlights:{
        color: colors.colorHotDrink
    },
    containerProducts:{
        flexDirection: "row",    
        flexWrap: "wrap",
        gap: 10            
    }
})

