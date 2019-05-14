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
            <div class="container">
                <div className="row">
                    <Header heading="Training"></Header>
                </div>
                <div className="row">
                    <Content></Content>
                </div>
                <div className="row">
                    <Footer new="" designer={"Vijay"} copyright={"2019-20"}></Footer>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;