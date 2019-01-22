const getListProduct = (idType, page) => {
    let url;
    if (idType === 'COLLECTION') {
        url = `http://192.168.0.3/app/get_collection.php?page=${page}`;
    } else {
        url = `http://192.168.0.3/app/product_by_type.php?id_type=${idType}&page=${page}`;
    }
    return fetch(url).then(res => {
        return res.json();
    });
};

export default getListProduct;