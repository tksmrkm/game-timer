import React from 'react'
import {
    ListItem,
    ListItemText
} from 'material-ui'
import { Link } from 'react-router-dom'

export default ({page, handleOnClick}) => (
    <ListItem
        button
        component={Link}
        to={page.path}
        onClick={() => handleOnClick(false, page.label)}
    >
        <ListItemText primary={page.label} />
    </ListItem>
)
