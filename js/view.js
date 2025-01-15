const elButtonAddFavorites = document.querySelector('.favorite>button')
const elButtonAddCarts = document.querySelector('.cart >button')
const elButtonAddCompares = document.querySelector('.compare >button')
const elSelectList = document.querySelector('#select-sort')
const elSelectListQuantity = document.querySelector('#products-on-page')
const elOnclickFindProduct = document.querySelector('#find-product')
const elInputRangeFrom = document.querySelector('#price_from')
const elInputRangeTo = document.querySelector('#price_to')

elSelectList.onchange = onChangeSorted
elSelectListQuantity.onchange = onChangeSlice

elOnclickFindProduct.onclick = onInputFindProduct
// elInputRangeFrom.onchange = onChangeRangeFilterPriceFrom
// elInputRangeTo.onchange = onChangeRangeFilterPriceTo
elInputRangeFrom.onchange = onChangeRangeFilterPrice
elInputRangeTo.onchange = onChangeRangeFilterPrice

// const elOptionTen = document.querySelector('#ten')
// const elOptionTwenty = document.querySelector('#twenty')
// const elOptionThirty = document.querySelector('#thirty')
// const elOptionFourty = document.querySelector('#fourty')
// const elOptionFromExpensive = document.querySelector('#byPriceDESC')
// const elOptionFromAtoZ = document.querySelector('#byCaptionASC')
// const elOptionFromZtoA = document.querySelector('#byCaptionDESC')
// elSelectList[1].onchange = onChangeSortedFromExpensive
// elSelectList[2].onchange = onChangeSortedFromAToZ
// elSelectList[3].onchange = onChangeSortedFromZToA
// elOptionTen.onchange = onChangeSlice10
// elOptionTwenty.onchange = onChangeSlice20
// elOptionThirty.onchange = onChangeSlice30
// elOptionFourty.onchange = onChangeSlice40
// elButtonAddFavorites.onclick = onClickButtonAddFavorites
// elButtonAddCarts.onclick = onClickButtonAddCarts
// elButtonAddCompares.onclick = onClickButtonAddCompares