import { Image, ScrollView, Text, View } from "react-native"
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import { styles } from "./style"

export const OurOffers = () => {
    return(
        <View style={styles.containerOurOffers}>

            <Text style={styles.textOurOffers}>Nossas <Text style={styles.textHighlight}>Ofertas</Text></Text>

            <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
                <Image source={card1}/>
                <Image source={card2}/>
                <Image source={card3}/>
            </ScrollView>

        </View>
    )
}