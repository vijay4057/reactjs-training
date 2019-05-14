import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdminDashboard from './AdminDashboard/AdminDashboard.react';
import Profile from './Profile/Profile.react';
import profileimage from './images/profile.png'
import ShowCourse from './ShowCourse/ShowCourse.react';

const user = { userName: 'Vijay', email: 'vijay@abc.com' };
function App() {
  return (
    <div className="App">
      <AdminDashboard></AdminDashboard>
      <Profile imageRef={profileimage} points={10} level={'Architect'} user={user}></Profile>
      <ShowCourse />
    </div>
  );
}

export default App;
