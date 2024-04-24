import CartItem from '../CartItem'

import ReactContext from '../../ReactContext'

import './index.css'

const CartListView = () => (
  <ReactContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </ReactContext.Consumer>
)

export default CartListView
