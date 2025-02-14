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
function renderSpanRangePriceFrom(price) {
  const elSpan = document.querySelector('#pf')
  elSpan.innerHTML = price
}
function renderSpanRangePriceTo(price) {
  const elSpan = document.querySelector('#pt')
  elSpan.innerHTML = price
}

function renderRangeMax(max) {
  document.querySelector('#price_to').max = max
}
function renderRangeMin(min) {
  document.querySelector('#price_to').min = min
}

function renderContainerProduct(products) {
  console.log(products)
  const elDivContainer = document.querySelector('.container-products')
  console.log(elDivContainer)
  elDivContainer.innerHTML = ''
  for (const product of products) {
    const elProduct = generateProduct(product)
    elDivContainer.appendChild(elProduct)
  }
}

function renderPagination(totalPages) {
  const elPagination = document.querySelector('.pagination')
  elPagination.innerHTML = ''
  for (let numberPage = 0; numberPage < totalPages; numberPage++) {
    const elGeneratePage = generatePageButton(numberPage)
    elPagination.appendChild(elGeneratePage)
  }
}
