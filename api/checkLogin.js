// send request to check login token to server
const checkLogin = (token) => {
    return fetch('http://192.168.0.3/app/check_login.php', {
        method: 'POST',
        body: JSON.stringify({token: token}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json();
    });
};

module.exports = checkLogin;