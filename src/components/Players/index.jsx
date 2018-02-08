import React from 'react'

import {
    Grid,
    List,
    ListItem,
    ListItemText
} from 'material-ui'

import AddIcon from 'material-ui-icons/Add'

import AddForm from '../../containers/Players/AddForm'

export default ({players}) => {
    const playerNodes = players.map(player => (
        <ListItem key={player.id}>
            <ListItemText primary={player.name} />
        </ListItem>
    ))

    return (
        <Grid item xs>
            <List>
                {playerNodes}
            </List>
            <AddForm />
        </Grid>
    )
}
