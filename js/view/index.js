const elSelectSort = document.querySelector('#select-sort')
const elSelectPagination = document.querySelector('#products-on-page')
const elFindProduct = document.querySelector('#find-product')
const elInputRangeFrom = document.querySelector('#price_from')
const elInputRangeTo = document.querySelector('#price_to')
const elFilter = document.querySelector('.filter')

elSelectSort.onchange = onChangeSorted
elSelectPagination.onchange = onChangeSelectProductsPerPage
elFindProduct.onclick = onInputFindProduct
elInputRangeFrom.onchange = onChangeRangePriceFrom
elInputRangeTo.onchange = onChangeRangePriceTo
elFilter.onclick = onClickFilterCheckbox
