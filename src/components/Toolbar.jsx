import React from 'react'
import {
    Toolbar,
    IconButton
} from 'material-ui'

import MenuIcon from 'material-ui-icons/Menu'

export default ({handleOnClick}) => (
    <Toolbar>
        <IconButton color="inherit" aria-label="menu" onClick={() => handleOnClick(true)}>
            <MenuIcon />
        </IconButton>
    </Toolbar>
)
