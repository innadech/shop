function onClickButtonAddFavorites(e) {
  // console.log(e.target.parentElement.parentElement.parentElement)
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )

  // console.log(id)
  handleAddFavorites(id)
}
function onClickButtonAddCarts(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )
  console.log(id)
  handleAddCarts(id)
}
function onClickButtonAddCompares(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )
  // console.log(id)
  handleAddCompares(id)
}
function onChangeSorted(e) {
  // console.log(e.target.value)
  handleSortProducts(e.target.value)
}
function onInputFindProduct() {
  const elInputFindProduct = document.querySelector('#query')
  handleFindProducts(elInputFindProduct.value)
}

function onChangeSelectProductsPerPage(e) {
  // console.log(e.target.value)
  handleSetProductsPerPage(e.target.value)
}

function onChangeRangePriceFrom(e) {
  console.log(e.target.value)
  handleSetRangePriceFrom(e.target.value)

  // const elFrom = document.querySelector('#price_from')
  // const elTo = document.querySelector('#price_to')
  // console.log(e.target.value)
  // renderSpanRangePriceFrom(elFrom.value)
  // renderSpanRangePriceTo(elTo.value)
  // renderRangePrice(min, max, from, to)
}
function onChangeRangePriceTo(e) {
  console.log(e.target.value)
  handleSetRangePriceTo(e.target.value)
}
function onClickButtonPage(e) {
  console.log(e.target.innerHTML)
  handleSetPage(e.target.innerHTML)
}

function onClickCheckbox() {
  const elCheckbox = document.querySelector('input[type="checkbox"]:checked')
  console.log(elCheckbox.value.toString())
  handleFindCheckboxProducts(elCheckbox.value.toString())
}
