function findProducts(products, query) {
  return products.filter(
    product =>
      product.caption?.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.category?.toLowerCase().includes(query.toLowerCase())
  )
}

function rangePriceProducts(products, from, to) {
  updateMinMax(products)
  return products.filter(
    product => from <= product.price && product.price <= to
  )
}

function sortProducts(products, sortingType) {
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

function paginateProducts(products, productsPerPage, currentPage) {
  options.totalPages = countTotalPages(products, productsPerPage)
  const startIndex = productsPerPage * currentPage
  const endIndex = startIndex + productsPerPage
  return products.slice(startIndex, endIndex)
}

function countTotalPages(products, productsPerPage) {
  return Math.ceil(products.length / productsPerPage)
}

function updateMinMax(products) {
  options.max = Math.max(...products.map(product => product.price))
  options.mix = Math.min(...products.map(product => product.price))
}
