function onClickButtonAddFavorites(e) {
  const elWrapProduct = e.target.closest('.wrap-product')
  const productId = elWrapProduct.getAttribute('data-product-id')
  handleAddFavorites(productId)
}

function onClickButtonAddCarts(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )
  handleAddCarts(id)
}

function onClickButtonAddCompares(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )
  handleAddCompares(id)
}

function onChangeSorted(e) {
  handleSortProducts(e.target.value)
}

function onInputFindProduct() {
  const elInputFindProduct = document.querySelector('#query')
  handleFindProducts(elInputFindProduct.value)
}

function onChangeSelectProductsPerPage(e) {
  handleSetProductsPerPage(e.target.value)
}

function onChangeRangePriceFrom(e) {
  handleSetRangePriceFrom(e.target.value)
}

function onChangeRangePriceTo(e) {
  handleSetRangePriceTo(e.target.value)
}

function onClickButtonPage(e) {
  handleSetPage(e.target.innerHTML)
}

function onClickButtonFilter() {
  const elCheckbox = document.querySelector('input[type="checkbox"]:checked')
  console.log(elCheckbox.value.replace(/\s+/g, ''))
  console.log(typeof elCheckbox.value)

  handleFindProductsByAttributeValue(elCheckbox.value)
}
