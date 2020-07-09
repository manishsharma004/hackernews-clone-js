import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'  
import { News } from "common/features/news/News";

const routeConfig = [{
    path: '/',
    exact: true,
    component: News
}, {
    path: '/news',
    component: News
}, {
    path: '*',
    component: () => <h1>Not Found</h1>
}]


export default ({location=''}) => (
    <Router>
        <Switch>
        {
            routeConfig.map((routeProps, index) => <Route key={index} {...routeProps} />)
        }
        </Switch>
    </Router>
)