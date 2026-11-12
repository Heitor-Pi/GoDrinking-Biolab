import { ScrollView, Text, View } from "react-native"
import { CardSize } from "../CardSize"
import product1 from '../../assets/images/product1.png'
import { styles } from "./style"

export const AvailableSizes = () => {
    return(
        <View style={styles.containerAvailableSizes}>
            <Text style={styles.textTitle}>Tamanhos <Text style={styles.textHighlight}>Disponíveis</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize image={product1} amount="269" measure="ml"/>                                                
                <CardSize image={product1} amount="269" measure="ml"/>                                                
                <CardSize image={product1} amount="269" measure="ml"/>                                                
                <CardSize image={product1} amount="269" measure="ml"/>                                                
                <CardSize image={product1} amount="269" measure="ml"/>                                                
                <CardSize image={product1} amount="269" measure="ml"/>                                                
            </ScrollView>
        </View>
    )
}