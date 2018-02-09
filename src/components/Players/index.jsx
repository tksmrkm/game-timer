import React from 'react'

import { Grid } from 'material-ui'

import AddIcon from 'material-ui-icons/Add'
import AddForm from '../../containers/Players/AddForm'

import List from './List'
import Item from '../../containers/Players/Item'

export default ({players}) => {
    const playerNodes = players.map(player => (
        <Item
            key={player.id}
            pid={player.id}
            primary={player.name}
            sort={player.sort}
        />
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
