import React from 'react';
import './profile.css';

import {NavLink} from "react-router-dom";

const Profile = () => {


    return (
        
        <NavLink to="/profile">
            <button type="button" className="btn btn-outline-info w-100 mb-3">IMG Pavel Sekishov</button>
        </NavLink>
    
    );
};

export default Profile;
