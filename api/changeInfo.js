// send request to change user info
const changeInfo = (token, name, phone, address) => {
    return fetch('http://192.168.0.3/app/change_info.php', {
        method: 'POST',
        body: JSON.stringify({token: token, name: name, phone: phone, address: address}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json();
    })
};

module.exports = changeInfo;