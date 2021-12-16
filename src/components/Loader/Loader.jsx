import React from 'react';
import './loader.css';

const Loader = () => {


    return (
        
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div> 
       
    )
}

export default Loader;
