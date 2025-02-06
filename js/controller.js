function handleAddFavorites(id) {
  model.markAsFavoriteById(+id)
  model.getFavorites()
  renderSpanFavorite(model.getFavoritesCount())
  // renderFavorites(model.getFavorites())
}
function handleAddCarts(id) {
  model.addToCartById(+id)
  model.getCarts()
  renderSpanCart(model.getCartsCount())
}
function handleAddCompares(id) {
  model.markAsComparisonById(+id)
  model.getComparisons()
  renderSpanCompare(model.getComparisonsCount())
}
function handleSortProducts(sortingType) {
  options.sortingType = sortingType
  renderContainerProduct(computeProducts(testProducts, options))
}
function handleSortedbyPriceDESC() {
  renderContainerProduct(computeProducts(testProducts, options.sortingType))
}
function handleSortedbyCaptionASC() {
  renderContainerProduct(computeProducts(testProducts, options.sortingType))
}
function handleSortedbyCaptionDESC() {
  renderContainerProduct(computeProducts(testProducts, options.sortingType))
}
function handlePagination() {
  renderContainerProduct(
    computeProducts(testProducts, options.productsPerPage, options.currentPage)
  )
}
// function handleSlice20() {
//   renderContainerProduct(model.getSlice20())
// }
// function handleSlice30() {
//   renderContainerProduct(model.getSlice30())
// }
// function handleSlice40() {
//   renderContainerProduct(model.getSlice40())
// }
function handleFindProduct(query) {
  const product = model.findProductByQuery(query)
  renderContainerProduct(product)
}
function handleFilterPrice(priceFrom, priceTo) {
  const product = model.getfilterPrice(+priceFrom, +priceTo)
  renderContainerProduct(product)
  renderSpanFilterPriceFrom(priceFrom)
  renderSpanFilterPriceTo(priceTo)
}
function handlegetslice20AndSortFromCheap() {
  renderContainerProduct(model.getslice20AndSort())
}

renderContainerProduct(model.products)
