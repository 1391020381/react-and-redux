import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home.js'
import About from './pages/About.js'
import NotFound from './pages/NotFound.js'


const Routes = () => (
    <Router>
        <div>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="*" component={NotFound}></Route>
        </div>
    </Router>
)

export default Routes