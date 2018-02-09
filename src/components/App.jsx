import React from 'react'

import {
    Grid,
    List
} from 'material-ui'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import Drawer from '../containers/Drawer'
import Toolbar from '../containers/Toolbar'
import ListItem from '../containers/ListItem'
import Home from './Home'
import Players from './Players'
import Timer from '../containers/Timer'

const pages = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        component: Home
    },
    {
        key: 'players',
        label: 'Set Players',
        path: '/players',
        component: Players
    },
    {
        key: 'timer',
        label: 'Timer Config',
        path: '/timer',
        component: Timer
    }
]

const drawers = pages.map(page => (
    <ListItem
        key={page.key}
        button
        page={page}
    />
))

const routes = pages.map(page => (
    <Route
        key={page.key}
        exact
        path={page.path}
        component={page.component}
    />
))

const App = () => (
    <Grid container>
        <Grid item xs={12}>
            <Toolbar />
        </Grid>
        <Drawer>
            {drawers}
        </Drawer>
        {routes}
    </Grid>
)

export default App
