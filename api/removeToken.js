import { AsyncStorage } from "react-native";

const RemoveToken = async () => {
    try {
        console.log('removing token');
        await AsyncStorage.removeItem('token')
    } catch (error) {
        // Error saving data
        console.log(error)
    }
};

export default RemoveToken