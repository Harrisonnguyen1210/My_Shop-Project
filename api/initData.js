const getData = () => {
    return fetch('http://192.168.0.3/app/index.php')
    .then(response => response.json())
};

export default getData