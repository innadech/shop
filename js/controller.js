// function handleAddFavorites(products, id) {
//   modelUserSelections.markAsFavoriteById(products, +id)
//   modelUserSelections.getFavorites(products)
//   renderSpanFavorite(modelUserSelections.getFavoritesCount())
// }
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
  options.currentPage = 0
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
}

function handleFindProducts(query) {
  options.query = query
  options.currentPage = 0
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
}

function handleSetProductsPerPage(perPage) {
  options.productsPerPage = +perPage
  options.currentPage = 0
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
}

function handleSetPage(currentPage) {
  options.currentPage = +currentPage
  renderContainerProduct(computeProducts())
}

function handleSetRangePriceFrom(from) {
  options.priceFrom = +from
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
  renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
}
function handleSetRangePriceTo(to) {
  options.priceTo = +to
  renderContainerProduct(computeProducts())
  renderPagination(options.totalPages)
  renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
}
function handleFindCheckboxProducts(attributes) {
  const finded = filterCheckboxProducts(products, attributes)
  renderContainerProduct(finded)
}

renderContainerProduct(computeProducts())
renderPagination(options.totalPages)
resetFromTo()
renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
