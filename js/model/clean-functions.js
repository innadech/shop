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
      // console.log(product.attributes[attributeKey])
      if (product.attributes[attributeKey] === attributeValue) {
        foundProductsByAttributes.push(product)
      }
    }
  }
  return foundProductsByAttributes
}

// const productsss = [
//   {
//     id: 76,
//     price: 1017,
//     caption: 'ПК для дизайнеров Solaris-E',
//     description: 'Для дизайнеров',
//     category: 'Computers',
//     attributes: {
//       'Количество ядер': '8',
//       'Частота процессора': '2.5Ghz',
//       'Тип накопителя': 'SSD',
//       'Тип ОЗУ': 'DDR4',
//       Процессор: 'Intel',
//       'Объем накопителя': '500Gb',
//       'Объем ОЗУ': '64Gb',
//       'Блок питания': '600W',
//       'Материнская плата': 'AsRock',
//       'Частота ОЗУ': '3200Mhz',
//     },
//     photos: [
//       '303518.jpg',
//       '2021081822490438.jpg',
//       '2021052721133781.jpg',
//       '20200109184529262.jpg',
//       '20210929220840958.jpg',
//       '20220609194904370.jpg',
//       '2021032422172686.jpg',
//       '20140923134911813.jpg',
//       '2018012900441512.jpg',
//       '20210312213512836.jpg',
//     ],
//   },
//   {
//     id: 77,
//     price: 1047,
//     caption: 'ПК для дизайнеров Solaris-C',
//     description: 'Для дизайнеров',
//     category: 'Computers',
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
//     photos: [
//       'mx330-g_03.jpg',
//       '20220728195917766.jpg',
//       '20220813205701953.jpg',
//       '2022100119211163.jpg',
//       '20210426220118727.jpg',
//       '20200709223236369.jpg',
//       '20210909220122114.jpg',
//       '20180813055053442.jpg',
//       '20180810033346717.jpg',
//       '20180812022621522.jpg',
//     ],
//   },
//   {
//     id: 78,
//     price: 1146,
//     caption: 'ПК для дизайнеров Solaris-B',
//     description: 'Для дизайнеров',
//     category: 'Computers',
//     attributes: {
//       Процессор: 'Intel',
//       'Частота процессора': '2.5Ghz',
//       'Объем ОЗУ': '8Gb',
//       'Объем накопителя': '250Gb',
//       'Тип накопителя': 'SSD',
//       'Блок питания': '650W',
//       'Материнская плата': 'ASRock',
//       'Частота ОЗУ': '2666Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Количество ядер': '8',
//     },
//     photos: [
//       'U0416714_3big.jpg',
//       '20220728195917766.jpg',
//       '20220702185058917.jpg',
//       '20211030192926801.jpg',
//       '20210527213815220.jpg',
//       '2021092821452396.jpg',
//       '20211113190339970.jpg',
//       '20180813055053442.jpg',
//       '20141119163220617.jpg',
//       '20200316215938624.jpg',
//     ],
//   },
// ]

let filter = {
  'Блок питания': [],
  'Количество ядер': [],
  'Материнская плата': [],
  'Объем ОЗУ': [],
  'Объем накопителя': [],
  Процессор: [],
  'Тип ОЗУ': [],
  'Тип накопителя': [],
  'Частота ОЗУ': [],
  'Частота процессора': [],
}

// function addAtributesToFilter(products, key) {
//   for (let product of products) {
//     for (let attributeKey in product.attributes) {
//       if (attributeKey === key) {
//         attributeKey
//         console.log(product.attributes[attributeKey])
//         filter[key].push(product.attributes[attributeKey])
//       }
//     }
//   }
// }

function addAtributesToFilter(products) {
  for (let product of products) {
    for (let attributeKey in product.attributes) {
      if (filter[attributeKey]) {
        // filter[attributeKey]
        console.log(product.attributes[attributeKey])
        filter[attributeKey].push(product.attributes[attributeKey])
      }
    }
  }
}
// addAtributesToFilter(productsss)
// filter

// function addAtributesToFilter(products) {
//   for (let product of products) {
//     for (let attributeKey in product.attributes) {
//       if (filter[attributeKey]) это строка проверяет существует ли ключ attributeKey в обьекте filter:если attributeKey =  'КОЛИЧЕСТВО ЯДЕР'
// то filter['КОЛИЧЕСТВО ЯДЕР'] существует (это пустой массив [])
//       {
//         // filter[attributeKey]
//         console.log(product.attributes[attributeKey])
//         filter[attributeKey].push(product.attributes[attributeKey])
//         если ключ attributeKey существует в filter, то мы добавляем значение
//         push(product.attributes[attributeKey] в массив filter[attributeKey]
//       }
//     }
//   }
// }
