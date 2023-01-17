import { useState, FC, ReactElement,} from 'react'
import {ThemeProvider, CssBaseline} from '@mui/material'
import {theme} from './theme/theme'


const App : FC = () :ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div>hello worssssld</div>
        </ThemeProvider>

    )
}

export default App