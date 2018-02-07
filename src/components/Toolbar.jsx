import React from 'react'
import {
    Toolbar,
    IconButton,
    Typography
} from 'material-ui'

import MenuIcon from 'material-ui-icons/Menu'

export default ({title, handleOnClick}) => (
    <Toolbar>
        <IconButton color="inherit" aria-label="menu" onClick={() => handleOnClick(true)}>
            <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">{title}</Typography>
    </Toolbar>
)
