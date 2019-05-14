import React from 'react';
import Header from '../Header/Header.react';
import Content from '../Content/Content.react';
import Footer from '../Footer/Footer.react';


class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        );
    }
}

export default AdminDashboard;