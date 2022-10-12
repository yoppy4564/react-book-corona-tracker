import Header from "../components/Header"; 
import Title from "../components/Title";
import Card from "../components/Card";  
import React from "react";

interface SingleCountriesDataType {
    Country: string,            
    newConfirmed: number,     
    totalConfirmed: number,
}

interface WorldPageType {
    allCountriesData: Array<SingleCountriesDataType>
}

const WorldPage = ({ allCountriesData }: WorldPageType) => {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    );
};

export default WorldPage;