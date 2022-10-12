import React from "react";

type SelectorType = {
    setCountry: React.Dispatch<React.SetStateAction<string>>, 
    countriesJson: {
        Country: string,
        Slug: string,
    }[], 
}

const Selector = ({ setCountry, countriesJson }: SelectorType) => {
    return (
        <div className="selector-container">
            <select onChange={(e) => setCountry(e.target.value)}>  
                {countriesJson.map((country, index) => 
                   <option key={index} value={country.Slug}>{country.Country}</option>
                )}      
            </select> 
        </div>
    );
};

export default Selector;