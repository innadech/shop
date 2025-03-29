async function handleAddFavorites(id) {
  const products = await getProductsAPI()
  console.log(products)
  setPaginatedProductsStorage(products)
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

function handleSetProductsPerPage(pagesize) {
  state.pageSize = +pagesize
  renderContainerProduct(paginatedProducts())
  renderPagination(totalPages())
}

function handleSetPage(currentPage) {
  state.currentPage = +currentPage
  renderContainerProduct(paginatedProducts())
}

function handleSetRangePriceFrom(from) {
  state.priceFrom = +from
  renderContainerProduct(paginatedProducts())
  renderPagination(totalPages())
  renderRangePrice(minPrice(), maxPrice(), state.priceFrom, state.priceTo)
}
function handleSetRangePriceTo(to) {
  state.priceTo = +to
  renderContainerProduct(paginatedProducts())
  renderPagination(totalPages())
  renderRangePrice(minPrice(), maxPrice(), state.priceFrom, state.priceTo)
}
function handleFindProductsByAttributeValue(attributes) {
  console.log(paginatedProducts())
  const finded = findProductsByAttributeValue(paginatedProducts(), attributes)
  console.log(finded)
  renderContainerProduct(finded)
  renderPagination(totalPages())
}

renderContainerProduct(paginatedProducts())
renderPagination(totalPages())
renderRangePrice(minPrice(), maxPrice(), state.priceFrom, state.priceTo)
