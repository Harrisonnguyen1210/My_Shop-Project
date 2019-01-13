// post register data to server
const register = (email, name, password) => {
    return fetch('http://192.168.0.3/app/register.php', {
        method: 'POST',
        body: JSON.stringify({email, name, password}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.text();
    })
};

module.exports = register;