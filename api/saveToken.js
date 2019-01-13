import { AsyncStorage } from "react-native";

const SaveToken = async (token) => {
    try {
        console.log('saving token');
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        // Error saving data
        console.log(error)
    }
};

export default SaveToken