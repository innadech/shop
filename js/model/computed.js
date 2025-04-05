function convertedCurrencyProducts() {
  return getConvertedCurrencyProducts(products)
}
function searchedProducts() {
  return getSearchedProducts(convertedCurrencyProducts(), state.searchQuery)
}
function foundAttributedProducts() {
  return getfindProductsByAttributeValue(
    searchedProducts(),
    state.checkedAttributes
  )
}
function pricedProducts() {
  return getPricedProducts(
    foundAttributedProducts(),
    state.priceFrom,
    state.priceTo
  )
}

function sortedProducts() {
  return getSortedProducts(pricedProducts(), state.sortingType)
}

function paginatedProducts() {
  return getPaginatedProducts(
    sortedProducts(),
    state.pageSize,
    state.currentPage
  )
}

function sortedProductsLength() {
  return getSortedProductsLength(sortedProducts())
}

let oldTotalPages = 0
function totalPages() {
  const newTotalPages = getTotalPages(sortedProductsLength(), state.pageSize)
  if (oldTotalPages !== newTotalPages) state.currentPage = 0
  oldTotalPages = newTotalPages
  return newTotalPages
}

function minPrice() {
  const x = getMinPrice(sortedProducts())
  if (state.priceFrom < x) state.priceFrom = x
  return x
}

function maxPrice() {
  const x = getMaxPrice(sortedProducts())
  if (state.priceTo > x) state.priceTo = x
  return x
}
