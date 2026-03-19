import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

// "name": {
// "common": "Jamaica",
// "official": "Jamaica"
// },
// "ccn3": {
// "ccn3": "388"
// },
// "currencies": {
// "currencies": {
// "JMD": {
// "name": "Jamaican dollar",
// "symbol": "$"
// }
// }
// },
// "capital": {
// "capital": [
// "Kingston"
// ]
// },
// "region": {
// "region": "Americas"
// },
// "languages": {
// "languages": {
// "eng": "English",
// "jam": "Jamaican Patois"
// }
// },
// "area": {
// "area": 10991
// },
// "cca3": {
// "cca3": "JAM"
// },
// "population": {
// "population": 2961161
// },
// "continents": {
// "continents": [
// "North America"
// ]
// },
// "flags": {
// "flags": {
// "png": "https://flagcdn.com/w320/jm.png",
// "svg": "https://flagcdn.com/jm.svg",
// "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
// }

const Countries = ({ loadCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {

    const newCountries = [...visitedCountries, country]
    
    console.log("Event triggered for", newCountries);
    
    setVisitedCountries(newCountries)

  };

  const countriesData = use(loadCountries);

  const countries = countriesData.countries;

  return (

    <div>
      
      <h1>All Countries : {countries.length} </h1>

      <h2>Visited Country: {visitedCountries.length} </h2>

      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>

      <div className="countries">

        {countries.map((country) => (

          <Country
            key={country.name.common}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>

        ))}

      </div>
    </div>
  );
};

export default Countries;
