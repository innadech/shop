function handleAddFavorites(products, id) {
  model.markAsFavoriteById(products, +id)
  model.getFavorites(products)
  renderSpanFavorite(model.getFavoritesCount())
  // renderFavorites(model.getFavorites())
}
// function handleAddCarts(id) {
//   model.addToCartById(+id)
//   model.getCarts()
//   renderSpanCart(model.getCartsCount())
// }
// function handleAddCompares(id) {
//   model.markAsComparisonById(+id)
//   model.getComparisons()
//   renderSpanCompare(model.getComparisonsCount())
// }
function handleSortProducts(sortingType) {
  options.sortingType = sortingType
  renderContainerProduct(computeProducts(products, options))
  renderPagination(options.totalPages)
}
function handleFindProducts(query) {
  options.query = query
  options.currentPage = 0
  renderContainerProduct(computeProducts(products, options))
  renderPagination(options.totalPages)
}
function handleRangePrice(from, to) {
  options.priceFrom = +from
  options.priceTo = +to
  renderContainerProduct(computeProducts(products, options))
}
function handleSetProductsPerPage(perPage) {
  options.productsPerPage = +perPage
  options.currentPage = 0
  renderContainerProduct(computeProducts(products, options))
  renderPagination(options.totalPages)
  renderRangeMax(options.max)
  renderRangeMin(options.min)
}
function handleSetPage(currentPage) {
  options.currentPage = +currentPage
  const computedProducts = computeProducts(products, options)
  renderContainerProduct(computedProducts)
}
function handleSetRange() {
  const max = findMin(products)
  renderRangeMax(max)
}

renderContainerProduct(products)
