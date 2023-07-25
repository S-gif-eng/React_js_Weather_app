import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMeatball } from "@fortawesome/free-solid-svg-icons";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../Api";
const Header = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="body">
    <div  className="SearchBar">
      <AsyncPaginate
        placeholder="Seacrh For Cities"
        value={search}
       
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      <AsyncPaginate />
    </div>
    </div>
  );
};

export default Header;
