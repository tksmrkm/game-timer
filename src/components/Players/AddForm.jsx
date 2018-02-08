import React from 'react'
import { v4 } from 'uuid'

import {
    Button,
    Dialog,
    Grid,
    TextField
} from 'material-ui'

import AddIcon from 'material-ui-icons/Add'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            dialog: false,
            player: {
                name: '',
            }
        })
    }

    handleDialog(state) {
        this.setState({
            dialog: state
        })
    }

    handleSubmit() {
        this.props.handleSubmit(v4(), this.state.player.name)
        this.handleInput('')
    }

    handleInput(string) {
        this.setState({
            player: {
                name: string
            }
        })
    }

    render() {
        return (
            <Grid item xs>
                <Button
                    variant="fab"
                    color="primary"
                    onClick={() => this.handleDialog(true)}
                    style={{
                        position: 'absolute',
                        right: '15px',
                        bottom: '15px'
                    }}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.dialog}
                    onClose={() => this.handleDialog(false)}
                >
                    <TextField
                        fullWidth
                        label="Name"
                        id="inputPlayerName"
                        value={this.state.player.name}
                        onChange={e => this.handleInput(e.target.value)}
                    />
                    <Button
                        onClick={() => this.handleSubmit()}
                    >
                        Submit
                    </Button>
                </Dialog>
            </Grid>
        )
    }
}
