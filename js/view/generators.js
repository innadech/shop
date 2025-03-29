function generateProduct(product) {
  const elDivWrapProduct = document.createElement('div')
  const elDivWrapA = document.createElement('div')
  const elA = document.createElement('a')
  const elDivWrapImg = document.createElement('div')
  const elImg = document.createElement('img')
  const elDivName = document.createElement('div')
  const elH3 = document.createElement('h')
  const elDivLabel = document.createElement('div')

  const elDivWrapP = document.createElement('div')
  const elP = document.createElement('p')
  const elPB = document.createElement('b')
  const elDivRow = document.createElement('div')
  const elDivCart = document.createElement('div')
  const elDivCartButton = document.createElement('button')
  const elDivFavorite = document.createElement('div')
  const elDivFavoriteButton = document.createElement('button')
  const elDivCompare = document.createElement('div')
  const elDivCompareButton = document.createElement('button')
  const elDivNew = document.createElement('div')

  elDivWrapProduct.classList.add('wrap-product')
  elDivWrapProduct.setAttribute('data-product-id', product.id)
  elDivWrapA.classList.add('wrap-a')
  elA.classList.add('a-link')
  elA.setAttribute('href', '?type=product_card&id= ' + product.id + '')
  elDivWrapImg.classList.add('wrap-img')
  elImg.setAttribute('src', './img/products/' + product.photos[0] + '')
  const url = 'https://web-app.click/pc-shop/photos/products/computers/'
  elImg.setAttribute('src', url + product.photos[0])
  // elImg.setAttribute('src', './img/products/' + product.photos[0] + '')
  // elImg.setAttribute('alt', product.caption)
  elDivName.classList.add('wrap-h3')
  elH3.textContent = product.caption

  for (const key in product.attributes) {
    const elLabel = document.createElement('label')
    // console.log(product.attributes[key])
    elLabel.textContent = product.attributes[key]
    elLabel.setAttribute('for', product.attributes[key])
    elDivLabel.appendChild(elLabel)
  }

  elDivWrapP.classList.add('wrap-p')
  elPB.textContent = product.price + ' грн'

  elDivRow.classList.add('row')
  elDivCart.classList.add('cart')
  elDivFavorite.classList.add('favorite')
  elDivCompare.classList.add('compare')
  elDivNew.classList.add('new_')

  elDivFavorite.onclick = onClickButtonAddFavorites
  elDivCart.onclick = onClickButtonAddCarts
  elDivCompare.onclick = onClickButtonAddCompares

  elDivWrapProduct.appendChild(elDivWrapA)
  elDivWrapA.appendChild(elA)
  elA.appendChild(elDivWrapImg)
  elDivWrapImg.appendChild(elImg)
  elA.appendChild(elDivName)
  elDivName.appendChild(elH3)
  elDivWrapProduct.appendChild(elDivLabel)

  elDivWrapProduct.appendChild(elDivWrapP)
  elDivWrapP.appendChild(elP)
  elP.appendChild(elPB)
  elDivWrapProduct.appendChild(elDivRow)
  elDivRow.appendChild(elDivCart)
  elDivCart.appendChild(elDivCartButton)
  elDivRow.appendChild(elDivFavorite)
  elDivFavorite.appendChild(elDivFavoriteButton)
  elDivRow.appendChild(elDivCompare)
  elDivCompare.appendChild(elDivCompareButton)
  return elDivWrapProduct
}

function generateCheckboxItem(value) {
  const elDivWrapCheckbox = document.createElement('div')
  const elDivWrapCheckboxInput = document.createElement('input')
  const elDivWrapCheckboxLabel = document.createElement('label')
  elDivWrapCheckbox.classList.add('wrap-checkbox')

  elDivWrapCheckboxInput.setAttribute('type', 'checkbox')
  elDivWrapCheckboxInput.setAttribute('value', value)
  elDivWrapCheckboxInput.setAttribute('id', value)
  elDivWrapCheckboxInput.setAttribute('name', 'Блок питания')
  elDivWrapCheckboxLabel.setAttribute('for', value)
  elDivWrapCheckboxLabel.textContent = value

  elDivWrapCheckbox.appendChild(elDivWrapCheckboxInput)
  elDivWrapCheckbox.appendChild(elDivWrapCheckboxLabel)
  return elDivWrapCheckbox
}

function generateCheckboxItems(values) {
  const elCheckboxes = document.createElement('div')
  elCheckboxes.classList.add('checkboxes')
  for (const value of values) {
    const elWrapCheckbox = generateCheckboxItem(value)
    elCheckboxes.appendChild(elWrapCheckbox)
  }
  return elCheckboxes
}
function generatePropsAttributeKey(keytext, values) {
  const elDivWrapProps = document.createElement('div')
  const elDivWrapPropsH3 = document.createElement('h3')
  const generate = generateCheckboxItems(values)

  elDivWrapProps.classList.add('wrap-props')

  elDivWrapPropsH3.textContent = keytext
  elDivWrapProps.appendChild(elDivWrapPropsH3)
  elDivWrapProps.appendChild(generate)
  return elDivWrapProps
}

function generatePropsAttributeKeys(filter) {
  const elWpapFilter = document.createElement('div')
  elWpapFilter.classList.add('wrap-filter')
  for (const key in filter) {
    const filterValue = filter[key]
    const elFilter = generatePropsAttributeKey(key, filterValue)
    elWpapFilter.appendChild(elFilter)
  }
  return elWpapFilter
}

function generateRangeFrom(product) {
  const elRangeFrom = document.createElement('div')
  const elLabel = document.createElement('label')
  const elSpan = document.createElement('span')
  const elInput = document.createElement('input')
  elRangeFrom.classList.add('wrap-range')

  elInput.setAttribute('type', 'range')
  elInput.setAttribute('name', product.value)
  elInput.setAttribute('id', product.value)
  elInput.setAttribute('value', product.value)
  elInput.setAttribute('min', product.value)
  elInput.setAttribute('max', product.value)
  elLabel.setAttribute('for', value)
  elLabel.textContent = value

  elRangeFrom.appendChild(elLabel)
  elRangeFrom.appendChild(elInput)
  elLabel.appendChild(elSpan)
  return elRangeFrom
}

function generatePageButton(numberPage) {
  const paginationContainer = document.createElement('a')
  paginationContainer.classList.add('page')
  paginationContainer.textContent = numberPage
  paginationContainer.onclick = onClickButtonPage
  return paginationContainer
}
// product.attributes['Блок питания']
