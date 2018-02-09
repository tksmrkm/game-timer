import React from 'react'
import { List } from 'material-ui'
import { DragDropContext } from 'react-dnd'
import ReactDnDHtml5Backend from 'react-dnd-html5-backend'
import ReactDnDTouchBackend from 'react-dnd-touch-backend'

@DragDropContext(ReactDnDTouchBackend)
export default class extends React.Component {
    render() {
        return (
            <List>
                {this.props.children}
            </List>
        )
    }
}
