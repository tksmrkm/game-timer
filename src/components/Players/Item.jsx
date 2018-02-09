import React from 'react'
import { findDOMNode } from 'react-dom'
import {
    ListItem,
    ListItemText,
    ListItemIcon
} from 'material-ui'
import SortIcon from 'material-ui-icons/Sort'
import { DropTarget, DragSource } from 'react-dnd'

const target = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().sort
        const hoverIndex = props.sort
        if (dragIndex === hoverIndex) {
            return
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        const clientOffset = monitor.getClientOffset()

        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        props.sortPlayer(props.pid, dragIndex, hoverIndex)

        monitor.getItem().sort = hoverIndex
    }
}

const source = {
    beginDrag(props) {
        return {
            id: props.pid,
            sort: props.sort,
        }
    }
}

@DropTarget('ListItem', target, connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource('ListItem', source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class extends React.Component {
    render() {
        const {
            primary,
            isDragging,
            connectDragSource,
            connectDropTarget
        } = this.props
        const opacity = isDragging ? 0: 1

        return connectDragSource(connectDropTarget(
            <div style={{opacity}}>
                <ListItem>
                    <ListItemIcon>
                        <SortIcon />
                    </ListItemIcon>
                    <ListItemText primary={primary} />
                </ListItem>
            </div>
        ))
    }
}
