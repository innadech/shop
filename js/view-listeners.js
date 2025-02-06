function onClickButtonAddFavorites(e) {
  console.log(
    e.target.parentElement.parentElement.parentElement.getAttribute(
      'data-product-id'
    )
  )
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
  console.log(id)
  handleAddCompares(id)
}
function onChangeSorted(e) {
  console.log(e.target.value)
  if (e.target.value === 'byPriceASC') {
    console.log(e.target.value === 'byPriceASC')
    handleSortedbyPriceASC(e.target.value)
  }
  if (e.target.value === 'byPriceDESC') {
    handleSortedbyPriceDESC()
  }
  if (e.target.value === 'byCaptionASC') {
    handleSortedbyCaptionASC()
  }
  if (e.target.value === 'byCaptionDESC') {
    handleSortedbyCaptionDESC()
  }
}

function onChangeSlice(e) {
  if (e.target.value === '10') {
    handleSlice10()
  }
  if (e.target.value === '20') {
    handleSlice20()
  }
  if (e.target.value === '30') {
    handleSlice30()
  }
  if (e.target.value === '40') {
    handleSlice40()
  }
}

function onInputFindProduct() {
  const elInputFindProduct = document.querySelector('#query')
  handleFindProduct(elInputFindProduct.value)
}

function onChangeRangeFilterPrice(e) {
  console.log(e.target.value)
  // const elInputRangeFrom = document.querySelector('#price_from')
  // const elInputRangeTo = document.querySelector('#price_to')
  handleFilterPrice(e.target.value, e.target.value)
}

// function onChangeRangeFilterPriceFrom() {
//   const elInputRangeFrom = document.querySelector('#price_from')
//   const elInputRangeTo = document.querySelector('#price_to')
//   handleFilterPrice (elInputRangeFrom.value,elInputRangeTo.value)
// }
// function onChangeRangeFilterPriceTo() {
//   const elInputRangeFrom = document.querySelector('#price_from')
//   const elInputRangeTo = document.querySelector('#price_to')
//   handleFilterPrice (elInputRangeFrom.value,elInputRangeTo.value)
// }
// function onChangeSortedFromExpensive() {
//   handleSortedFromExpensive()
// }
// function onChangeSortedFromAToZ() {
//   handleSortedFromAToZ()
// }
// function onChangeSortedFromZToA() {
//   handleSortedFromZToA()
// }
// function onChangeSlice20() {
//   handleSlice20()
// }
// function onChangeSlice30() {
//   handleSlice30()
// }
// function onChangeSlice40() {
//   handleSlice40()
// }
