const modelUserSelections = {
  getProductById(products, id) {
    return products.find(product => product.id === id)
  },

  getFavorites(products) {
    return products.filter(product => product.isFavorite)
  },

  getFavoritesCount() {
    return this.getFavorites().length
  },

  markAsFavoriteById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isFavorite = true
    }
  },

  unmarkFavoriteById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isFavorite = false
    }
  },

  getCarts(products) {
    return products.filter(product => product.isCart)
  },

  getCartsCount() {
    return this.getCarts().length
  },

  addToCartById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCart = true
    }
  },

  removeFromCartById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCart = false
    }
  },

  getComparisons(products) {
    return products.filter(product => product.isCompare)
  },

  getComparisonsCount() {
    return this.getComparisons().length
  },

  markAsComparisonById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCompare = true
    }
  },

  unmarkComparisonById(products, id) {
    const findedProduct = this.getProductById(products, id)
    if (findedProduct) {
      findedProduct.isCompare = false
    }
  },
}
