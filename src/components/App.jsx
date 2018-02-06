import React from 'react'

import {
    Grid
} from 'material-ui'

import Drawer from '../containers/Drawer'
import Toolbar from '../containers/Toolbar'

const App = () => (
    <Grid container>
        <Toolbar />
        <Drawer />
    </Grid>
)

export default App
