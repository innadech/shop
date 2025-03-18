function getConvertedCurrencyProducts(products) {
  // const copyProducts = []
  // for (const product of products) {
  //   const obj = {}
  //   obj.id = product.id
  //   obj.price = product.price * 40
  //   obj.caption = product.caption
  //   obj.description = product.description
  //   obj.category = product.category
  //   obj.attributes = product.attributes
  //   obj.photos = product.photos
  //   copyProducts.push(obj)
  // }

  return products.map(p => ({ ...p, price: p.price * 40 }))
}

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

function getSortedProductsLength(products) {
  return products.length
}

function getTotalPages(productsLength, pageSize) {
  return Math.ceil(productsLength / pageSize)
}

function getMinPrice(products) {
  return Math.min(...products.map(product => product.price))
}

function getMaxPrice(products) {
  return Math.max(...products.map(product => product.price))
}

function findProductsByAttributeValue(products, attributeValue) {
  let foundProductsByAttributes = []
  for (let product of products) {
    for (let attributeKey in product.attributes) {
      attributeKey
      console.log(product.attributes[attributeKey])
      if (product.attributes[attributeKey] === attributeValue) {
        foundProductsByAttributes.push(product)
      }
    }
  }
  return foundProductsByAttributes
}
