import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./CountryListTable.css";

function CountryListTable() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countriesList = data.map((data) => ({
            flag: data.countryInfo.flag,
            countryName: data.country,
            confirmedCases: data.cases,
            recoveredCases: data.recovered,
            deaths: data.deaths,
          }));
          setCountryList(countriesList);
        });
    };
    getCountriesData();
  }, []);

  // custom style
  const customStyles = {
    rows: {
      style: {
        fontSize: "1rem",
        minHeight: "60px",
        color: "var(--blue1)",
      },
    },
    headCells: {
      style: {
        color: "var(--blue2)",
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
  };

  // columns
  const columns = [
    {
      name: "Location",
      cell: (row) => (
        <div
          data-tag="allowRowEvents"
          className="flex align_center justify_between"
        >
          <img
            src={row.flag}
            alt=""
            width="25px"
            height="20px"
            style={{ marginRight: "0.8rem", borderRadius: "2px" }}
          />
          <span>{row.countryName}</span>
        </div>
      ),
      sortable: false,
    },
    {
      name: "Confirmed",
      selector: "confirmedCases",
      sortable: true,
      right: true,
    },
    {
      name: "Recovered",
      selector: "recoveredCases",
      sortable: true,
      right: true,
    },
    {
      name: "Deaths",
      selector: "deaths",
      sortable: true,
      right: true,
    },
  ];

  return (
    <div className="corona_cases_country_list">
      <h1>Browse by Country</h1>
      <DataTable
        columns={columns}
        data={countryList}
        customStyles={customStyles}
        highlightOnHover={true}
        noHeader={true}
        responsive={true}
        fixedHeader={true}
        fixedHeaderScrollHeight="100vh"
      />
    </div>
  );
}

export default CountryListTable;
