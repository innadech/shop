function findProducts(products, query) {
  return products.filter(
    product =>
      product.caption?.toLowerCase().includes(query.toLowerCase()) ||
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
  options.totalPages = countTotalPages(sortedProducts, options.productsPerPage)
  options.max = findMax(sortedProducts)
  options.min = findMin(sortedProducts)
  options.from = options.min
  options.to = options.max
  return paginatedProducts
}

const options = {
  query: '',
  productsPerPage: 10,
  currentPage: 0,
  sortingType: 'byPriceDESC',
  priceFrom: -Infinity,
  priceTo: Infinity,
  totalPages: 0,
  min: 50,
  max: 5000,
}

function countTotalPages(products, productsPerPage) {
  return Math.ceil(products.length / productsPerPage)
}
function findMax(products) {
  return Math.max(...products.map(product => product.price))
}
function findMin(products) {
  return Math.min(...products.map(product => product.price))
}

// const testProducts = [
//   {
//     caption: 'аГеймерский',
//     price: 233,
//   },
//   {
//     caption: 'бГеймерский',
//     price: 125,
//   },
//   {
//     caption: 'вОфисный',
//     price: 600,
//   },
//   {
//     caption: 'гОфисный',
//     price: 100,
//   },
//   {
//     caption: 'дОфисный',
//     price: 800,
//   },
//   {
//     caption: 'еОфисный',
//     price: 440,
//   },
// ]
// let answer = findMinMax(testProducts)
// answer
// // console.log(testProducts.length)

// // let count = 6 //всего записей
// // let productsPerPage = 2 //сколько отображаем сначала
// // let countpage = Math.ceil(count / productsPerPage) //кол-во страниц
// options.productsPerPage = 2
// options.currentPage = 0
// options.sortingType = 'byPriceASC'
// // options.priceFrom = 200
// // options.priceTo = 600
// answer = computeProducts(testProducts, options)
// console.log(answer.length)
//
// // let create = creatPage(answer, 3)
// // create
// // create
// function totalPage(products, options) {
//   return creatPage(products, options.productsPerPage)
// }
// let sss = totalPage(computeProducts(testProducts, options), options)
// sss

// let answer

// answer = computeProducts(testProducts, options)
// answer

// options.currentPage = 1

// answer = computeProducts(testProducts, options)
// answer

// options.currentPage = 2

// answer = computeProducts(testProducts, options)
// answer

// options.productsPerPage = 4
// options.currentPage = 0
// options.sortingType = 'byPriceASC'

// answer = computeProducts(testProducts, options)
// answer

// options.productsPerPage = 40
// options.currentPage = 0
// options.sortingType = 'byPriceASC'
// options.priceFrom = 200
// options.priceTo = 600
// answer = computeProducts(testProducts, options)
// answer
