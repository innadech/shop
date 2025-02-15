function handleAddFavorites(products, id) {
  modelUserSelections.markAsFavoriteById(products, +id)
  modelUserSelections.getFavorites(products)
  renderSpanFavorite(modelUserSelections.getFavoritesCount())
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
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
}

function handleFindProducts(query) {
  options.query = query
  options.currentPage = 0
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
}

function handleRangePrice(from, to) {
  options.priceFrom = +from
  options.priceTo = +to
  renderContainerProduct(computeProducts())
}

function handleSetProductsPerPage(perPage) {
  options.productsPerPage = +perPage
  options.currentPage = 0
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
  renderRangeMax(options.max)
  renderRangeMin(options.min)
}

function handleSetPage(currentPage) {
  options.currentPage = +currentPage
  renderContainerProduct(computeProducts())
}

function handleSetRangePriceFrom(from) {
  options.priceFrom = +from
  renderContainerProduct(computeProducts())
  renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
}

renderContainerProduct(computeProducts())
resetFromTo()
renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
