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
  options.min = Math.min(...products.map(product => product.price))
}

const testProducts = [
  {
    caption: 'аГеймерский',
    price: 233,
    attributes: '300W',
  },
  {
    caption: 'бГеймерский',
    price: 125,
    attributes: '450W',
  },
  {
    caption: 'вОфисный',
    price: 600,
    attributes: '400W',
  },
  {
    caption: 'гОфисный',
    price: 100,
    attributes: '600W',
  },
  {
    caption: 'дОфисный',
    price: 800,
    attributes: '400W',
  },
  {
    caption: 'еОфисный',
    price: 440,
    attributes: '500W',
  },
]

function filterCheckboxProducts(products, query) {
  return products.filter(product =>
    product.attributes.toLowerCase().includes(query.toLowerCase())
  )
}

const answer = filterCheckboxProducts(testProducts, '500W')
answer

const attributes = {
  'Тип накопителя': 'SSD',
  'Материнская плата': 'Asus',
  'Количество ядер': '6',
  'Частота ОЗУ': '3200Mhz',
  'Тип ОЗУ': 'DDR4',
  'Объем накопителя': '500Gb',
  'Объем ОЗУ': '8Gb',
  Процессор: 'Intel',
  'Частота процессора': '4.1 Ghz',
  'Блок питания': '750W',
}

console.log('Процессор' in attributes)
console.log('Процессоры' in attributes)

for (const attribute in attributes) {
  console.log(attribute)
}

const object = {
  a: 1,
  b: 3,
  c: 5,
}

const key = 'a'
console.log(object.a)
console.log(object['a'])
console.log(object[key])

for (const key in object) {
  console.log(key)
  console.log(object[key])
}

console.log('a' in object)
console.log('d' in object)
