function renderSpanFavorite(text) {
  const elSpan = document.querySelector('#innerFavorite')
  elSpan.innerHTML = text
}
function renderSpanCart(text) {
  const elSpan = document.querySelector('#innerCart')
  elSpan.innerHTML = text
}
function renderSpanCompare(text) {
  const elSpan = document.querySelector('#innerCompare')
  elSpan.innerHTML = text
}
function renderPBPrice(uahprice) {
  elPB = uahprice
}

function renderRangePrice(min, max, from, to) {
  renderSpanRangePriceFrom(from)
  renderSpanRangePriceTo(to)
  renderInputRangePriceFromMax(max)
  renderInputRangePriceFromMin(min)
  renderInputRangePriceToMax(max)
  renderInputRangePriceToMin(min)
  renderInputRangePriceFromValue(from)
  renderInputRangePriceToValue(to)
}
function renderSpanRangePriceFrom(price) {
  const elSpan = document.querySelector('#pf')
  elSpan.innerHTML = price
}
function renderSpanRangePriceTo(price) {
  const elSpan = document.querySelector('#pt')
  elSpan.innerHTML = price
}
function renderInputRangePriceFromMax(max) {
  document.querySelector('#price_from').max = max
}
function renderInputRangePriceFromMin(min) {
  document.querySelector('#price_from').min = min
}
function renderInputRangePriceToMax(max) {
  document.querySelector('#price_to').max = max
}
function renderInputRangePriceToMin(min) {
  document.querySelector('#price_to').min = min
}
function renderInputRangePriceFromValue(val) {
  document.querySelector('#price_from').value = val
}
function renderInputRangePriceToValue(val) {
  document.querySelector('#price_to').value = val
}

function renderContainerProduct(products) {
  const elDivContainer = document.querySelector('.container-products')
  elDivContainer.innerHTML = ''
  for (const product of products) {
    const elProduct = generateProduct(product)
    elDivContainer.appendChild(elProduct)
  }
}

function renderFilter(filter) {
  const elFilter = document.querySelector('.filter-checkbox')
  const elDivAttributeKeys = generatePropsAttributeKeys(filter)
  elFilter.innerHTML = ''
  elFilter.appendChild(elDivAttributeKeys)
}

function renderPagination(totalPages) {
  const elPagination = document.querySelector('.pagination')
  elPagination.innerHTML = ''
  for (let numberPage = 0; numberPage < totalPages; numberPage++) {
    const elGeneratePage = generatePageButton(numberPage)
    elPagination.appendChild(elGeneratePage)
  }
}
