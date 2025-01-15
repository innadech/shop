function renderSpanFavorite(text){
  const elSpan = document.querySelector('#innerFavorite')
  elSpan.innerHTML = text
 }
function renderSpanCart(text){
  const elSpan = document.querySelector('#innerCart')
  elSpan.innerHTML = text
 }
function renderSpanCompare(text){
  const elSpan = document.querySelector('#innerCompare')
  elSpan.innerHTML = text
 }
function renderSpanFilterPriceFrom(price){
  const elSpan = document.querySelector('#pf')
  elSpan.innerHTML = price
 }
function renderSpanFilterPriceTo(price){
  const elSpan = document.querySelector('#pt')
  elSpan.innerHTML = price
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