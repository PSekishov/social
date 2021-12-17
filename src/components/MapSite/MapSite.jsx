import React from 'react';
import './mapSite.css';

import {NavLink} from "react-router-dom";

const MapSite = () => {


    return (
        
        <div className="list-group">
            <NavLink to="/" className="list-group-item list-group-item-action">Home</NavLink>
            <NavLink to="/groops" className="list-group-item list-group-item-action">Groops</NavLink>
            <NavLink to="/frends" className="list-group-item list-group-item-action">Frends</NavLink>
            <NavLink to="/messages" className="list-group-item list-group-item-action">Messages</NavLink>
            <NavLink to="/musics" className="list-group-item list-group-item-action">Music</NavLink>
            <NavLink to="/weather" className="list-group-item list-group-item-action">Weather</NavLink>
            <NavLink to="/sport" className="list-group-item list-group-item-action">Sport</NavLink>
            <NavLink to="/games" className="list-group-item list-group-item-action">Games</NavLink>
            <NavLink to="/settings" className="list-group-item list-group-item-action">Settings</NavLink>
        </div> 
        
    );
};

export default MapSite;
