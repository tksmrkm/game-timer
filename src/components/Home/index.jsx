import React from 'react'

import {
    Grid,
    Typography
} from 'material-ui'
import RouteComponent from '../../containers/RouteComponent'

export default ({label}) => (
    <RouteComponent label={label}>
        <Grid item xs>
            <Typography type="title">Home</Typography>
        </Grid>
    </RouteComponent>
)
