import { View } from 'react-native';
import { StartScreen } from './screens/StartScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProductsScreen } from './screens/ProductsScreen';
import { DetailsProduct } from './screens/DetailsProduct';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <StartScreen/> */}
      {/* <HomeScreen /> */}
      {/* <ProductsScreen/> */}
      <DetailsProduct/>
    </View>
  );
}