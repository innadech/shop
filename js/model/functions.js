function findProducts(products, query) {
  return products.filter(
    product =>
      product.caption.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.category?.toLowerCase().includes(query.toLowerCase())
  )
}

function rangePriceProducts(products, from, to) {
  return products.filter(
    product => from <= product.price && product.price <= to
  )
}

function sortProducts(products, sortingType) {
  if (sortingType === 'byPriceASC')
    return products.toSorted((a, b) => a.price - b.price)
  if (sortingType === 'byPriceDESC')
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

function paginateProducts(products, productsPerPage, currentPage) {
  let startIndex = productsPerPage * currentPage
  let endIndex = startIndex + productsPerPage
  return products.slice(startIndex, endIndex)
}

function computeProducts(products, options) {
  const findedProducts = findProducts(products, options.query)
  const rangedProducts = rangePriceProducts(
    findedProducts,
    options.priceFrom,
    options.priceTo
  )
  const sortedProducts = sortProducts(rangedProducts, options.sortingType)
  const paginatedProducts = paginateProducts(
    sortedProducts,
    options.productsPerPage,
    options.currentPage
  )
  return paginatedProducts
}

const options = {
  query: '',
  productsPerPage: 2,
  currentPage: 0,
  sortingType: 'byPriceDESC',
  priceFrom: -Infinity,
  priceTo: Infinity,
}

const testProducts = [
  {
    caption: 'аГеймерский',
    price: 233,
  },
  {
    caption: 'бГеймерский',
    price: 125,
  },
  {
    caption: 'вОфисный',
    price: 600,
  },
  {
    caption: 'гОфисный',
    price: 100,
  },
  {
    caption: 'дОфисный',
    price: 800,
  },
]

let answer

answer = computeProducts(testProducts, options)
answer

options.currentPage = 1

answer = computeProducts(testProducts, options)
answer

options.currentPage = 2

answer = computeProducts(testProducts, options)
answer

options.productsPerPage = 4
options.currentPage = 0
options.sortingType = 'byPriceASC'

answer = computeProducts(testProducts, options)
answer

options.productsPerPage = 5
options.currentPage = 0
options.sortingType = 'byPriceASC'
options.priceFrom = 200
options.priceTo = 600
answer = computeProducts(testProducts, options)
answer
