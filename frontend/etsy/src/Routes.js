import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Favorites from "./components/Favorites"
import ProfilePage from "./components/ProfilePage"
import Example from "./components/Example"

const Routes = () => {
  return (
    <Switch>
      {/*Render Different Component based on Route*/}
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/example' component={Example} />
      {/* <Route exact path="/create" component={Create}/> */}
    </Switch>
  )
}

export default Routes
