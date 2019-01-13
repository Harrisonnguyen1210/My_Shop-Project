// post register data to server
const signIn = (email, password) => {
    return fetch('http://192.168.0.3/app/login.php', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json();
    })
};

module.exports = signIn;