import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    cardSize:{
        borderWidth: 2,
        borderColor: "#C531D0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: 75,
        height: 80,
        alignItems: "center",
        gap: 5
    },
    productImage:{
        width: 18,
        height: 40
    },
    textAmount:{
        color: colors.colorWhite,
        fontWeight: "700"
    },
    textMeasure:{
        color: colors.colorHotDrink
    }
})