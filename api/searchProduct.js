const searchProduct = (key) => {
    const url = `http://192.168.0.3/app/search.php?key=${key}`;
    return fetch(url)
    .then(res => {
        return res.json()
    })
};

export default searchProduct;