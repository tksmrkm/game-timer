import React from 'react'
import {
    Drawer
} from 'material-ui'

export default ({open, handleOnClose}) => (
    <Drawer
        open={open}
        onClose={() => handleOnClose(false)}
    />
)
