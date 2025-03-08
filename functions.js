function getSearchedProducts(products, searchQuery) {
  return products.filter(
    product =>
      product.caption?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  )
}

function getPricedProducts(products, priceFrom, priceTo) {
  return products.filter(p => priceFrom <= p.price && p.price <= priceTo)
}

function getSortedProducts(products, sortingType) {
  if (sortingType === 'byPriceASC')
    return products.toSorted((a, b) => a.price - b.price)
  if (sortingType === 'byPriceDESC')
    return products.toSorted((a, b) => b.price - a.price)
  if (sortingType === 'byCaptionASC')
    return products.toSorted((a, b) => {
      if (a.caption < b.caption) return -1
    })
  if (sortingType === 'byCaptionDESC')
    return products
      .toSorted((a, b) => {
        if (a.caption < b.caption) return -1
      })
      .toReversed()
  return []
}

function getPaginatedProducts(products, pageSize, currentPage) {
  const startIndex = pageSize * currentPage
  const endIndex = startIndex + pageSize
  return products.slice(startIndex, endIndex)
}

function getTotalPages(products, pageSize) {
  return Math.ceil(products.length / pageSize)
}

function getSortedProductsLength(sortedProducts) {
  return sortedProducts.length
}

function getMinPrice(products) {
  return Math.min(...products.map(product => product.price))
}

function getMaxPrice(products) {
  return Math.max(...products.map(product => product.price))
}
