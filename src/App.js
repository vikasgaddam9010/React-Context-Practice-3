import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import ReactContext from './ReactContext'

import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {cartList: []}

  addItemToCart = product => {
    this.setState(prevState => ({cartList : [...prevState.cartList, product]}))
  }

  render() {
    const {cartList} = this.state

    return (
      <BrowserRouter>
        <ReactContext.Provider
          value={{cartList, addItemToCart: this.addItemToCart}}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </ReactContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
