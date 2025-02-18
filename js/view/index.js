// const elButtonAddFavorites = document.querySelector('.favorite>button')
// const elButtonAddCarts = document.querySelector('.cart >button')
// const elButtonAddCompares = document.querySelector('.compare >button')

const elSelectSort = document.querySelector('#select-sort')
const elSelectPagination = document.querySelector('#products-on-page')
const elFindProduct = document.querySelector('#find-product')
const elInputRangeFrom = document.querySelector('#price_from')
const elInputRangeTo = document.querySelector('#price_to')
const elFilter = document.querySelector('.filter')

// elButtonAddFavorites.onclick = onClickButtonAddFavorites
// elButtonAddCarts.onclick = onClickButtonAddCarts
// elButtonAddCompares.onclick = onClickButtonAddCompares

elSelectSort.onchange = onChangeSorted
elSelectPagination.onchange = onChangeSelectProductsPerPage
elFindProduct.onclick = onInputFindProduct
elInputRangeFrom.onchange = onChangeRangePriceFrom
elInputRangeTo.onchange = onChangeRangePriceTo
elFilter.onclick = onClickCheckbox
