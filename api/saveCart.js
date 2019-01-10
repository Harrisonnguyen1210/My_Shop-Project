import { AsyncStorage } from "react-native";

const SaveCart = async (cartArray) => {
    try {
        console.log('saving cart');
        await AsyncStorage.setItem('carts', JSON.stringify(cartArray))
    } catch (error) {
        // Error saving data
        console.log(error)
    }
};

export default SaveCart