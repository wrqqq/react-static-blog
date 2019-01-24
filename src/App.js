import React from 'react'
import { Root, Routes } from 'react-static'
import { hot } from 'react-hot-loader'

import './app.css'

function App () {
    return (
        <Root>
            <div className="content">
                <Routes />
            </div>
        </Root>
    )
}

export default hot(module)(App)
