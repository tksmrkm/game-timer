import React from 'react'
import { v4 } from 'uuid'

import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    Grid,
    TextField
} from 'material-ui'

import AddIcon from 'material-ui-icons/Add'
import ShuffleIcon from 'material-ui-icons/Shuffle'

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

    handleSubmit(e) {
        if (e) {
            e.preventDefault()
        }
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
                <Button
                    variant="fab"
                    color="secondary"
                    onClick={() => this.props.handleShufflePlayer()}
                    style={{
                        position: 'absolute',
                        left: '15px',
                        bottom: '15px'
                    }}
                >
                    <ShuffleIcon />
                </Button>
                <Dialog
                    open={this.state.dialog}
                    onClose={() => this.handleDialog(false)}
                >
                    <DialogContent>
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <TextField
                                fullWidth
                                label="Name"
                                id="inputPlayerName"
                                value={this.state.player.name}
                                onChange={e => this.handleInput(e.target.value)}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => this.handleSubmit()}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        )
    }
}
