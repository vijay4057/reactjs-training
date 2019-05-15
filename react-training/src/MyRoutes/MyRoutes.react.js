import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TrainingDashboard from '../TrainingDashboard/TrainingDashboard.react'
import AdminDashboard from '../AdminDashboard/AdminDashboard.react'
import Profile from '../Profile/Profile.react';
import profileimage from '../images/profile.png'
const user = { userName: 'Vijay', email: 'vijay@abc.com' };
const MyRoutes = () => {

    return (
        <div >

            <Switch>
                <Route exact path="/" component={TrainingDashboard} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/profile" render={() => { return <Profile imageRef={profileimage} points={10} level={'Architect'} user={user}></Profile> }} />
            </Switch>

        </div>
    );

}

export default MyRoutes;