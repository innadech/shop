const modelUserSelections = {
  getProductById(products, id) {
    return (this.findedProduct = products.find(product => product.id === id))
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

  unmarkFavoriteById(id) {
    const findedProduct = this.getProductById(id)
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

  addToCartById(id) {
    const findedProduct = this.getProductById(id)
    if (findedProduct) {
      findedProduct.isCart = true
    }
  },

  removeFromCartById(id) {
    const findedProduct = this.getProductById(id)
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

  markAsComparisonById(id) {
    const findedProduct = this.getProductById(id)
    if (findedProduct) {
      findedProduct.isCompare = true
    }
  },

  unmarkComparisonById(id) {
    const findedProduct = this.getProductById(id)
    if (findedProduct) {
      findedProduct.isCompare = false
    }
  },
}
