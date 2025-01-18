function generateProduct(product) {
  const elDivWrapProduct = document.createElement('div')
  const elDivWrapA = document.createElement('div')
  const elA = document.createElement('a')
  const elDivWrapImg = document.createElement('div')
  const elImg = document.createElement('img')
  const elDivName = document.createElement('div')
  const elH3 = document.createElement('h')
  const elDivLabel = document.createElement('div')
  const elLabelPower = document.createElement('label')
  const elLabelMaternal = document.createElement('label')
  const elLabelVolume = document.createElement('label')
  const elLabelStorage = document.createElement('label')
  const elLabelType = document.createElement('label')
  const elLabelTypeStorage = document.createElement('label')
  const elLabelFrequency = document.createElement('label')
  const elDivWrapP = document.createElement('div')
  const elP = document.createElement('p')
  const elPB = document.createElement('b')
  const elDivRow = document.createElement('div')
  const elDivCart= document.createElement('div')
  const elDivCartButton= document.createElement('button')
  const elDivFavorite= document.createElement('div')
  const elDivFavoriteButton= document.createElement('button')
  const elDivCompare = document.createElement('div')
  const elDivCompareButton= document.createElement('button')
  const elDivNew= document.createElement('div')

  elDivWrapProduct.classList.add('wrap-product')
  elDivWrapProduct.setAttribute('data-product-id', product.id)
  elDivWrapA.classList.add('wrap-a')
  elA.classList.add('a-link')
  elA.setAttribute('href', '?type=product_card&id= ' + product.id + '')
  elDivWrapImg.classList.add('wrap-img')
  elImg.setAttribute('src', './img/products/' + product.photos[0] + '')
  elImg.setAttribute('alt', product.caption)
  elDivName.classList.add('wrap-h3')
  elH3.textContent = product.caption

  elLabelPower.setAttribute('for', product.attributes)
  elLabelMaternal.setAttribute('for',product.attributes)
  elLabelVolume.setAttribute('for',product.attributes)
  elLabelStorage.setAttribute('for',product.attributes)
  elLabelType.setAttribute('for',product.attributes)
  elLabelTypeStorage.setAttribute('for',product.attributes)
  elLabelFrequency.setAttribute('for',product.attributes)
  elLabelPower.textContent = product.attributes[0]
  elLabelMaternal.textContent = product.caption
  elLabelVolume.textContent = product.caption
  elLabelType.textContent = product.caption
  elLabelTypeStorage.textContent = product.caption
  elLabelFrequency.textContent = product.caption


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
  elDivLabel.appendChild(elLabelPower)
  elDivLabel.appendChild(elLabelMaternal)
  elDivLabel.appendChild(elLabelVolume)
  elDivLabel.appendChild(elLabelStorage)
  elDivLabel.appendChild(elLabelTypeStorage)
  elDivLabel.appendChild(elLabelFrequency)
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
  return  elDivWrapProduct
}

function generatePage(number){
  const paginationContainer = document.createElement('a')
  paginationContainer.classList.add('page')
  paginationContainer.textContent = number
  return paginationContainer
}
