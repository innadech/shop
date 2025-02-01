function computeProducts(products, options) {
  const findedProducts = findProducts(products)
  const rangedProducts = rangePriceProducts(findedProducts)
  const sortedProducts = sortProducts(rangedProducts, options.sortingType)
  const paginatedProducts = paginateProducts(sortedProducts)
  return paginatedProducts
}
