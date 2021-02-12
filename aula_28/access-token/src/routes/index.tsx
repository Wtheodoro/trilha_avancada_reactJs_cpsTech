import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Products from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/products" exact component={Products} />
        </Switch>
    )
}

export default Routes