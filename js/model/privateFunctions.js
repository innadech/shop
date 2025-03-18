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
  uahPrice(products)
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
  options.min = Math.min(...products.map(product => product.price))
}
function uahPrice(products) {
  return products.map(product => product.price * 40)
}

// const testProducts = [
//   {
//     caption: 'аГеймерский',
//     price: 233,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '450W',
//     },
//   },
//   {
//     caption: 'бГеймерский',
//     price: 125,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '550W',
//     },
//   },
//   {
//     caption: 'вОфисный',
//     price: 600,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '550W',
//     },
//   },
//   {
//     caption: 'гОфисный',
//     price: 100,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '750W',
//     },
//   },
//   {
//     caption: 'дОфисный',
//     price: 800,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '950W',
//     },
//   },
//   {
//     caption: 'еОфисный',
//     price: 440,
//     attributes: {
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       'Количество ядер': '6',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '8Gb',
//       Процессор: 'Intel',
//       'Частота процессора': '4.1 Ghz',
//       'Блок питания': '1050W',
//     },
//   },
// ]

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
// const foundObject = findProductsByAttributeValue(testProducts, '550W')
// console.log(foundObject)

// function uahPrice(products) {
//   return products.map(product => product.price * 40)
// }

// const newAnswer = (products)=>products.map(product => product.price * 40)

// const answer = uahPrice(testProducts)
// answer
// testProducts
