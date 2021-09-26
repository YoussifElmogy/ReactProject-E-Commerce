import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import{Home,Private,Products,SingleProduct,About,Cart,Error,Checkout} from './pages'

import AuthWrapper from './pages/AuthWrapper'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Private exact path="/checkout">
            <Checkout></Checkout>
          </Private>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>

          <Route exact path="*" component={Error}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
  
}

export default App
