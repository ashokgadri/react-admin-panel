import React from 'react'
import { Router } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { history } from './helpers/history'
import {routes} from './routes'

function App() {
    return (
        <Router history = {history}>
            {renderRoutes(routes)}
        </Router>
    )
}

export default App
