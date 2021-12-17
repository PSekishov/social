import React from 'react';

const IndexPage = () => {

    return (
        <>
            <h3>Page Home</h3>
                <div className="card text-dark bg-light mb-3 w-100" >

                <div className="card-header"> IMG Daniel Ricciardo</div>
                    <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><small className="text-muted">Comments: 0</small></p>
                    </div>
                </div>

                <div className="card text-dark bg-light mb-3 w-100" >
                    <div className="card-header">IMG Lewis Hamilton</div>
                    <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><small className="text-muted">Comments: 5</small></p>
                    </div>
                </div>

                <div className="card text-dark bg-light mb-3 w-100" >
                    <div className="card-header">IMG  George Russell</div>
                    <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><small className="text-muted">Comments: 11</small></p>
                    </div>
                </div>
        </>
    );
};

export default IndexPage;
