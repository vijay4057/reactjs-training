import React from 'react';

import logo from '../images/logoin.svg'

const Header = (props) => {

    return (
        <div >

            <h1>{props.heading}</h1>
        </div>
    );

}

export default Header;