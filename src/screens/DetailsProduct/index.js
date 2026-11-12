import { Image, View } from "react-native"
import imageProduct from '../../assets/images/product1.png'
import OptionImage from '../../assets/images/OptionImage.png'


export const DetailsProduct = () => {
    return(
        <View>

            <View>
                <Image source={imageProduct}/>
                <View>   
                    <Image source={OptionImage}/>                 
                    <Image source={OptionImage}/>                 
                    <Image source={OptionImage}/>                 
                    <Image source={OptionImage}/>                 
                </View>
            </View>

        </View>
    )
}