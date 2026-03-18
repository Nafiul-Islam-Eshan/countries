import React from 'react';

const Country = ({country}) => {
    console.log(country.flags.flags);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>{country.name.common}</h2>
        </div>
    );
};

export default Country;