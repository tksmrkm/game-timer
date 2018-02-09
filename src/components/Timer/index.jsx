import React from 'react'

import {
    Grid,
    Typography,
    FormControl,
    FormControlLabel,
    TextField
} from 'material-ui'

export default ({timer, handleEditTimer}) => (
    <Grid item xs>
        <TextField
            select
            fullWidth
            label="Total Time(m)"
            value={timer.total}
            onChange={e => handleEditTimer('total', e.target.value)}
            SelectProps={{
                native: true
            }}
        >
            {Array.from(new Array(61)).map((v, i) => (
                <option key={i} value={i*60}>{i}</option>
            ))}
        </TextField>
        <TextField
            select
            fullWidth
            label="Step Time(s)"
            value={timer.step}
            onChange={e => handleEditTimer('step', e.target.value)}
            SelectProps={{
                native: true
            }}
        >
            {Array.from(new Array(301)).map((v, i) => (
                <option key={i} value={i}>{i}</option>
            ))}
        </TextField>
        <TextField
            select
            fullWidth
            label="Minimum Time(s)"
            value={timer.minimum}
            onChange={e => handleEditTimer('minimum', e.target.value)}
            SelectProps={{
                native: true
            }}
        >
            {Array.from(new Array(301)).map((v, i) => (
                <option key={i} value={i}>{i}</option>
            ))}
        </TextField>
    </Grid>
)
