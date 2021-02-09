import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../Pages/Login'
import Private from '../Pages/Private'

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/private" exact component={Private} />
        </Switch>
    )
}

export default Routes