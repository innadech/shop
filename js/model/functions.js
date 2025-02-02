function findProducts(products, query) {
  return products.filter(
    product =>
      product.caption
        .toLowerCase()
        .toString()
        .includes(query.toLowerCase().toString()) ||
      product.description
        .toLowerCase()
        .toString()
        .includes(query.toLowerCase().toString()) ||
      product.category
        .toLowerCase()
        .toString()
        .includes(query.toLowerCase().toString())
  )
}

function rangePriceProducts(products) {
  return products.filter(product => from < product.price && product.price < to)
}

function sortProducts(products, sortingType) {
  if (sortingType === 'ASC')
    return products.toSorted((a, b) => a.price - b.price)
  if (sortingType === 'DESC')
    return products.toSorted((a, b) => b.price - a.price)
  if (sortingType === 'byNameASC')
    return products.toSorted((a, b) => {
      if (a.caption < b.caption) return -1
    })
  if (sortingType === 'byNameDESC')
    return products
      .toSorted((a, b) => {
        if (a.caption < b.caption) return -1
      })
      .toReversed()
}

function paginateProducts(products, itemsOnPage, currentPage) {
  let startIndex = itemsOnPage * currentPage
  let endIndex = startIndex + itemsOnPage
  return products.slice(startIndex, endIndex)
}

// getFindedProducts(digit){
//   return this.products.filter(product =>
//   product.caption.toLowerCase().includes(digit.toLowerCase()) ||
//   product.description.toLowerCase().includes(this.query.toLowerCase()) ||
//   product.category.toLowerCase().includes(this.query.toLowerCase()) )
// }
