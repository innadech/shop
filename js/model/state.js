const state = {
  searchQuery: '',
  pageSize: 10,
  currentPage: 0,
  sortingType: 'byPriceASC',
  priceFrom: 0,
  priceTo: Number.MAX_SAFE_INTEGER,
  checkedAttributes: '',
}

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
function addAtributesToFilter(products) {
  for (let product of products) {
    for (let attributeKey in product.attributes) {
      if (filter[attributeKey]) {
        if (!filter[attributeKey].includes(product.attributes[attributeKey])) {
          filter[attributeKey].push(product.attributes[attributeKey])
        }
      }
    }
  }
}
function updateFilter() {
  addAtributesToFilter(products)
}
