async function getProductsAPI() {
  const url = 'https://pc-shop.web-app.click/api/v0/products'
  const resp = await fetch(url)
  const json = await resp.json()
  const jsonPayload = await json.payload
  console.log(jsonPayload)
  return jsonPayload
}
