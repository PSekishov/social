import React from 'react';
import './header.css';

const Header = () => {

    return (

        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" width="30" height="30" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header;
