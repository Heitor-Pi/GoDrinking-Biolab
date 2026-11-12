import { Image, ScrollView, View } from "react-native"
import { OurOffers } from "../../components/OurOffers"
import logo from '../../assets/images/logo.png'
import { styles } from "./style"
import { AvailableSizes } from "../../components/AvailableSizes"
import { OurHighlights } from "../../components/OurHighlights"

export const HomeScreen = () => {
    return(
        <ScrollView contentContainerStyle={styles.containerHomeScreen}>

            <Image source={logo} style={styles.logoHome}/>

            <OurOffers/>

            <AvailableSizes/>

            <OurHighlights/>

        </ScrollView>
    )
}