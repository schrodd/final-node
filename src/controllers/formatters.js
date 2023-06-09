export function prodIdsFormatter(cart) {
  return cart.map((e) => ({ _id: e.id }))
}

export function prodInCartFormatter(cart, products) {
  const arr = []
  cart.forEach((e) => {
    const prod = products.find((f) => e.id == f._id);
    arr.push({ qty: e.qty, ...prod })
  })
  return arr
}

export function templateDataFormatter(req) {
  return ({ username: req.user.name, photo: req.user.photo, cartLength: req.user.cart.length })
}

export function userFormatter(username, password, body) {
  return ({ username, password, name: body.name, email: body.email, phone: body.phone, cart: [] })
}

export function userFormatterJwt(user, password) {
  return ({ username: user.username, password, name: user.name, email: user.email, phone: user.phone, cart: [] })
}
