import React from 'react'
import { view as TopMenu } from '../components/ToMenu'

const App = ({ children }) => {
    return (
        <div>
            <TopMenu></TopMenu>
            <div>{children}</div>
        </div>
    )
}

export default App