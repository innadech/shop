function computeProducts() {
  const findedProducts = findProducts(products, options.query)
  const rangedProducts = rangePriceProducts(
    findedProducts,
    options.priceFrom,
    options.priceTo
  )
  const sortedProducts = sortProducts(rangedProducts, options.sortingType)
  const paginatedProducts = paginateProducts(
    sortedProducts,
    options.productsPerPage,
    options.currentPage
  )
  return paginatedProducts
}

function resetFromTo() {
  options.priceFrom = options.min
  options.priceTo = options.max
}
