import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.setPageTitle(this.props.label)
    }

    render() {
        return this.props.children
    }
}
