// send order to server
const sendOrder = (token, arrayDetail) => {
    return fetch('http://192.168.0.3/app/cart.php', {
        method: 'POST',
        body: JSON.stringify({token, arrayDetail}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.text();
    })
};

module.exports = sendOrder;