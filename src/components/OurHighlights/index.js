import {Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import imageProduct1 from '../../assets/images/product1.png'
import { Styles } from "./style"

export const OurHighlights = () => {
    return(
        <View style={Styles.container}>

            <Text style={Styles.textOurHighlights}>Nossos <Text style={Styles.textHighlights}>Destaques</Text></Text>

            <View style={Styles.containerProducts}>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>                
            </View>

        </View>
    )
}