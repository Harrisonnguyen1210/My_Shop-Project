import SaveToken from './saveToken';

// send request to refresh login token
const  refreshToken = (token) => {
    return fetch('http://192.168.0.3/app/refresh_token.php', {
        method: 'POST',
        body: JSON.stringify({token: token}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.text();
    }).then(token => SaveToken(token));
};

export default refreshToken;