
export type CountryDataType = {
    date: string,
    newConfirmed: number,     
    totalConfirmed: number,   
    newRecovered: number,    
    totalRecovered: number, 
  }
  
  interface SingleCountriesDataType {
    Country: string,            
    newConfirmed: number,     
    totalConfirmed: number,
  }
  
  export interface AllCountriesDataTypeArray extends Array<SingleCountriesDataType>{}

  type countriesJsonType = {
    Country: string,
    Slug: string,
  }[]

  export type TopPageType = {
    countriesJson: countriesJsonType, 
    setCountry: React.Dispatch<React.SetStateAction<string>>, 
    countryData: CountryDataType, 
    loading: boolean,
}

export type SelectorType = {
    setCountry: React.Dispatch<React.SetStateAction<string>>, 
    countriesJson: countriesJsonType, 
}

