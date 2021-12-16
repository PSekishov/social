import React from 'react';
import './layout.css';

// import {Link} from "react-router-dom";

// =========== Components ============== //
import Header from '../Header';
import Footer from '../Footer';


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

                        <div className="col-md-2">

                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">Groops</a>
                                <a href="#" className="list-group-item list-group-item-action">Frends</a>
                                <a href="#" className="list-group-item list-group-item-action">Messages</a>
                                <a href="#" className="list-group-item list-group-item-action">Music</a>
                                <a href="#" className="list-group-item list-group-item-action">Weather</a>
                                <a href="#" className="list-group-item list-group-item-action">Sport</a>
                                <a href="#" className="list-group-item list-group-item-action">Live Ethers</a>
                                <a href="#" className="list-group-item list-group-item-action">Games</a>
                            </div>
                        </div>

                        <div className="col-md-8">
                        <div className="card text-dark bg-light mb-3 w-100" >
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div> 
                        </div>

                        <div className="col-md-2">
                            Contacts
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
