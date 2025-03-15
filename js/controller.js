function handleAddFavorites(id) {
  console.log(products)
  modelUserSelections.markAsFavoriteById(products, +id)
  modelUserSelections.getFavorites(products)
  const favoritesCount = modelUserSelections.getFavoritesCount(products)
  renderSpanFavorite(favoritesCount)
}
function handleAddCarts(id) {
  modelUserSelections.addToCartById(computeProducts(), +id)
  modelUserSelections.getCarts(computeProducts())
  const cartsCount = modelUserSelections.getCartsCount(products)
  renderSpanCart(cartsCount)
}
function handleAddCompares(id) {
  modelUserSelections.markAsComparisonById(computeProducts(), +id)
  modelUserSelections.getComparisons(computeProducts())
  const comparisonsCount = modelUserSelections.getComparisonsCount(products)
  renderSpanCompare(comparisonsCount)
}

function handleSortProducts(sortingType) {
  state.sortingType = sortingType
  renderContainerProduct(paginatedProducts())
  renderPagination(totalPages())
}

function handleFindProducts(query) {
  state.searchQuery = query
  renderContainerProduct(paginatedProducts())
  renderPagination(totalPages())
}

function handleSetProductsPerPage(perPage) {
  options.productsPerPage = +perPage

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
function handleFindProductsByAttributeValue(attributes) {
  const finded = findProductsByAttributeValue(computeProducts(), attributes)
  renderContainerProduct(finded)
}

renderContainerProduct(paginatedProducts())
renderPagination(totalPages())
renderRangePrice(minPrice(), maxPrice(), state.priceFrom, state.priceTo)
