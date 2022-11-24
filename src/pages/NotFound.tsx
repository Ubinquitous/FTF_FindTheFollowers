import React from 'react';
import Header from '../components/Header';
import '../style/Home.scss';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className='notf-wrap'>
                <span className='notfound'>
                    Page is not found. Sorry.
                </span>
            </div>
        </div>
    );
};

export default NotFound;