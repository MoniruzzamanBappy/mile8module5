import React from 'react';

// css import
import './Country.css'

const Country = (props) => {
    const item= props.country;
    return (
        <div  className='item'>
            <img src={item.flags.png} alt="" />
            <h2>Name: {item.name.common}</h2>
            

        </div>
    );
};

export default Country;