import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props) => {

    return (
        <div >
            <img src={props.imageRef} alt="" />
            <h1>{props.user.userName}</h1>
            <h1>{props.user.email}</h1>
            <p>{props.points}</p>
            <p>{props.level}</p>
        </div>
    );

}
Profile.propTypes = {
    imageRef: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    level: PropTypes.string,
    user: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}
export default Profile;