function setProductsStorage(products) {
  const stringifiedProducts = JSON.stringify(products)
  localStorage.setItem('products', stringifiedProducts)
}
function getProductsStorage() {
  const stringifiedProducts = localStorage.getItem('products')
  const parsedProducts = JSON.parse(stringifiedProducts)
  return parsedProducts
}
