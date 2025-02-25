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
function handleFindProductsByAttributeValue(attributes) {
  const finded = findProductsByAttributeValue(computeProducts(), attributes)
  renderContainerProduct(finded)
}

renderContainerProduct(computeProducts())
renderPagination(options.totalPages)
resetFromTo()
renderRangePrice(options.min, options.max, options.priceFrom, options.priceTo)
