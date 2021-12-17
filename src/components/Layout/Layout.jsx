import React from 'react';
import './layout.css';

import {Outlet} from "react-router-dom";


// =========== Components ============== //
import Header from '../Header';
import Footer from '../Footer';
import MapSite from '../MapSite';
import Profile from '../Profile';
import Contacts from '../Contacts';


const Layout = () => {

    return (
        <>

        <div className="wrapper">

            <header className="header">
                <Header />
            </header>
            
            <main className="main">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <Profile />
                            <MapSite />
                        </div>

                        <div className="col-md-6">
                            <Outlet />
                        </div>

                        <div className="col-md-3">
                            <Contacts />
                        </div>

                    </div> 
                </div> 
            </main> 
            </div>   {/* wrapper */}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Footer />
                        </div>
                    </div>
                </div>
            </footer>   
           
        </>
    )
}

export default Layout;
