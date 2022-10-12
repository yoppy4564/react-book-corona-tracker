import React from "react";

interface SingleCountriesDataType {
  Country: string,            
  newConfirmed: number,     
  totalConfirmed: number,
}

interface CardType {
  allCountriesData: Array<SingleCountriesDataType>
}

const Card = ({ allCountriesData }: CardType) => {
    return (
        <div className="card-container">
            {allCountriesData.map((singleData, index) =>
              <div key={index} className="card">
                <div>
                    <h2>{singleData.Country}</h2>                   
                    <p>新規感染者: <span>{singleData.newConfirmed.toLocaleString()}</span></p>      
                    <p>感染者総数: <span>{singleData.totalConfirmed.toLocaleString()}</span></p> 
                </div>   
              </div>
            )} 
        </div>
    );
};

export default Card;