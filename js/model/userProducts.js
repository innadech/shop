const modelUserSelections = {
  getProductById(_, id) {
    return products.find(product => product.id === id)
  },

  getFavorites() {
    return products.filter(product => product.isFavorite)
  },

  getFavoritesCount() {
    return this.getFavorites(products).length
  },

  markAsFavoriteById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isFavorite = true
    }
  },

  unmarkFavoriteById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isFavorite = false
    }
  },

  getCarts(products) {
    return products.filter(product => product.isCart)
  },

  getCartsCount() {
    return this.getCarts(products).length
  },

  addToCartById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCart = true
    }
  },

  removeFromCartById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCart = false
    }
  },

  getComparisons() {
    return products.filter(product => product.isCompare)
  },

  getComparisonsCount() {
    return this.getComparisons(products).length
  },

  markAsComparisonById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCompare = true
    }
  },

  unmarkComparisonById(_, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCompare = false
    }
  },
}
