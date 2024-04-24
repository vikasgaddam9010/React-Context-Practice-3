import React from 'react'

const ReactContext = React.createContext({
  cartList: [],
  addItemToCart: () => {},
})

export default ReactContext
