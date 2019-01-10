import { AsyncStorage } from "react-native";

const getCart = async () => {
    try {
        const cartArray = await AsyncStorage.getItem('carts');
        if (cartArray !== null) {
            // We have data!!
            console.log('Have cart -----------');
            return (JSON.parse(cartArray))
        }
        else {
            console.log('Don\'t have cart -----------');
            return []
        }
    } catch (error) {
        console.log(error)
    }
};

export default getCart