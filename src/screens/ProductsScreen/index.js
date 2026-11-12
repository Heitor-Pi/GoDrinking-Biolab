import { Image, ScrollView, Text, TextInput, View } from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import {styles } from "./style"
import { CardProduct } from "../../components/CardProduct"
import productImage from '../../assets/images/imageProduct.png'

export const ProductsScreen = () =>{
    return(
        <ScrollView contentContainerStyle={styles.containerProductsScreen}>

            <Image source={logo} style={styles.imgLogo}/>            

            <View style={styles.containerInput}>
                <TextInput style={styles.input}/>
                <Image source={filterIcon}/>
            </View>

            <View style={styles.ourProducts}>
                <View>
                    <Text style={styles.textOurProducts}>Nossos</Text>
                    <Text style={styles.textHighlightOurProducts}>Produtos</Text>
                </View>    
                <View style={styles.containerProducts}>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={productImage} title="TNT Roxo" description="Nosso sabor conta como..."/>
                </View>            
            </View> 

        </ScrollView>
    )
}