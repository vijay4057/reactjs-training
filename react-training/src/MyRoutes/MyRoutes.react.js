import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TrainingDashboard from '../TrainingDashboard/TrainingDashboard.react'
import AdminDashboard from '../AdminDashboard/AdminDashboard.react'


const MyRoutes = () => {

    return (
        <div >

            <Switch>
                <Route exact path="/" component={TrainingDashboard} />
                <Route path="/admin" component={AdminDashboard} />
            </Switch>

        </div>
    );

}

export default MyRoutes;