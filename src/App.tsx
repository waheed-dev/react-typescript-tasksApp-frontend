import { useState, FC, ReactElement,} from 'react'
import {ThemeProvider, CssBaseline} from '@mui/material'
import {theme} from './theme/theme'
import Dashboard from './pages/dashboard/dashboard'

const App : FC = () :ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Dashboard/>
        </ThemeProvider>

    )
}

export default App