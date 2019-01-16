const getListProduct = (idType, page) => {
  const url = `http://192.168.0.3/app/product_by_type.php?id_type=${idType}&page=${page}`;
  return fetch(url)
  .then(res => {
    return res.json()
  })
};

export default getListProduct;