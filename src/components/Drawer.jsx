import React from 'react'
import {
    Drawer
} from 'material-ui'

export default ({open, handleOnClose, children}) => (
    <Drawer
        anchor="left"
        open={open}
        onClose={() => handleOnClose(false)}
    >
        {children}
    </Drawer>
)
