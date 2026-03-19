import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {


    const [visited, setVisited] = useState(false)

    const handleVisited = () => {

        // basic system 
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }


        // 2nd system
        // visited ? setVisited(false) : setVisited(true)


        // 3rd system
        // setVisited(visited? false : true);


        // 4th system
        setVisited(!visited)

        handleVisitedCountries(country)
    }

    // console.log(Object.values(country.languages.languages).join(", "));

    return (
        <div className={`country ${visited && "country-visited "}`}>
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