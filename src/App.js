import React from 'react'
import { Root, Routes, Route } from 'react-static'
import { Link, Location } from '@reach/router'
import { Transition, animated } from 'react-spring'


const App = () => (
    <Root>
        <Routes>
            {({ getComponentForPath }) => {
                // The pathname is used to retrieve the component for that path
                let Comp = getComponentForPath(window.location.href)
                // The component is rendered!
                return <Comp />
            }}
        </Routes>
    </Root>
)

export default App