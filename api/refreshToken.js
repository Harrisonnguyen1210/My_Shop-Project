import saveToken from './saveToken';
import getToken from './getToken';

const getNewToken = (token) => (
    fetch('http://192.168.0.3/app/refresh_token.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
    .then(res => res.text())
);

const refreshToken = async () => {
    try {
        const token = await getToken();
        if (token === '' || token === 'INVALID TOKEN') {
            console.log('No token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
        console.log('NEW TOKEN: ' + newToken);
    } catch (e) {
        console.log(e);
    }
};

export default refreshToken;