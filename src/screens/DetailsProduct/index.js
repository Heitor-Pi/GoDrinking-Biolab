import { Image, View, Text } from "react-native"
import imageProduct from '../../assets/images/product1.png'
import OptionImage from '../../assets/images/OptionImage.png'
import { styles } from "./style"
import { ButtonPrimary } from "../../components/ButtonPrimary"


export const DetailsProduct = () => {
    return (
        <View style={styles.containerDetailsProduct}>

            <View style={styles.featuredProducts}>
                <Image source={imageProduct} />
                <View style={styles.imagesProduct}>
                    <Image source={OptionImage} />
                    <Image source={OptionImage} />
                    <Image source={OptionImage} />
                    <Image source={OptionImage} />
                </View>
            </View>

            <View style={styles.detailsProducts}>
                <Text style={styles.volumeProduct}>269ml</Text>
                <View >
                    <View>
                        <Text style={styles.textTitle}>TNT Energy</Text>
                        <Text style={styles.textHighlight}>Açaí com Guaraná</Text>
                    </View>
                    <Text style={styles.textDescription}>combina com o sabor marcante de açaí, trazendo uma explosão refrescante de energia, doçura natural e textura cremosa irresistível.</Text>
                </View>
                <ButtonPrimary title="Comprar"/>
            </View>
        </View>
    )
}