import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {

        //1st way 
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }


        // 2nd way
        // visited ? setVisited(false) : setVisited(true)


        setVisited(visited? false : true);


        // 3rd way
        // setVisited(!visited)
    }

    // console.log(Object.values(country.languages.languages).join(", "));
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>{country.name.common}</h2>
            <div className="">
                <p>Population: {country.population.population} </p>
                <p>Capital: {country.capital.capital.join(", ")} </p>
                <p>Area: {country.area.area} sq.m. </p>
                <p>Languages: {Object.values(country.languages.languages).join(", ")} </p>
            </div>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;