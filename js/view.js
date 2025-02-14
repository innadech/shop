const elButtonAddFavorites = document.querySelector('.favorite>button')
const elButtonAddCarts = document.querySelector('.cart >button')
const elButtonAddCompares = document.querySelector('.compare >button')
const elSelectList = document.querySelector('#select-sort')
const elSelectPagination = document.querySelector('#products-on-page')
const elOnclickFindProduct = document.querySelector('#find-product')
const elInputRangeFrom = document.querySelector('#price_from')
const elInputRangeTo = document.querySelector('#price_to')
const elPage = document.querySelector('.page')

elSelectList.onchange = onChangeSorted
elSelectPagination.onchange = onChangeSelectProductsPerPage

elOnclickFindProduct.onclick = onInputFindProduct
elInputRangeFrom.onchange = onChangeRangePrice
elInputRangeTo.onchange = onChangeRangePrice
elButtonAddFavorites.onclick = onClickButtonAddFavorites
elButtonAddCarts.onclick = onClickButtonAddCarts
elButtonAddCompares.onclick = onClickButtonAddCompares

// elPage.onclick = onClickButtonPage
