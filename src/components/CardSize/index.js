import { Image, Text, View } from "react-native"
import { styles } from "./style"

export const CardSize = ({image, amount, measure}) => {
    return(
        <View style={styles.cardSize}>
            <Image source={image} style={styles.productImage}/>

            <Text style={styles.textAmount}>{amount}<Text style={styles.textMeasure}>{measure}</Text></Text>

        </View>
    )
}