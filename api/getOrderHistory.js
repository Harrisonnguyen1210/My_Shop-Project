// get order history from server
const getOrderHistory = (token) => {
    return fetch('http://192.168.0.3/app/order_history.php', {
        method: 'POST',
        body: JSON.stringify({token}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        console.log(response);
        return response.json();
    })
};

module.exports = getOrderHistory;