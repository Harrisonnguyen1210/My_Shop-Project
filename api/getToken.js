import { AsyncStorage } from "react-native";

const GetToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
            // We have data!!
            console.log('Have token -----------');
            return token
        }
        else {
            console.log('Don\'t have token -----------');
            return ''
        }
    } catch (error) {
        console.log(error);
        return '';
    }
};

export default GetToken