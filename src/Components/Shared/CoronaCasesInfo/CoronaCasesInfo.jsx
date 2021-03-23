import React, { useState, useEffect } from "react";
import Select from "react-select";
import CasesLine from "./CasesLine/CasesLine";
import numeral from "numeral";
import "./CoronaCasesInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";

function CoronaCasesInfo() {
  const [counteryData, setCounteryData] = useState([]);
  const [casesData, setCasesData] = useState({});
  const [vaccineCount, setVaccineCount] = useState({});

  // Get List Of The Country
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countriesNameISO = data.map((country) => ({
            label: country.country,
            value: country.countryInfo.iso2,
          }));
          setCasesData(data.find((res) => res.country == "India"));
          setCounteryData(countriesNameISO);
        });
    };
    getCountriesData();
  }, []);

  // Default value for vaccine count data for india
  useEffect(() => {
    const getVaccineCount = async () => {
      fetch(
        "https://disease.sh/v3/covid-19/vaccine/coverage/countries/IND?lastdays=1"
      )
        .then((response) => response.json())
        .then((data) => {
          for (let date in data.timeline) {
            let newDataPoint = {
              x: date,
              y: data.timeline[date],
            };
            setVaccineCount(newDataPoint);
          }
        });
    };
    getVaccineCount();
  }, []);

  const onCountryChange = async (data) => {
    const countryCode = data.value;

    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCasesData(data);
      });

    await fetch(
      `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countryCode}?lastdays=1 `
    )
      .then((response) => response.json())
      .then((data) => {
        for (let date in data.timeline) {
          let newDataPoint = {
            x: date,
            y: data.timeline[date],
          };
          setVaccineCount(newDataPoint);
        }
      });
  };

  // Theam For Dropdown
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "rgb(248, 247, 247)",
        primary: "#2a81ea",
        primary50: "none",
      },
    };
  };

  return (
    <div className="cases_by_country">
      <h2>Coronavirus (COVID-19)</h2>
      <Select
        className="select_box"
        options={counteryData}
        onChange={onCountryChange}
        placeholder="India"
        theme={customTheme}
        maxMenuHeight={250}
        menuShouldBlockScroll={true}
      />
      <div className="total_confirme_cases">
        <p>Total Confirmed Cases</p>
        <h1>{numeral(casesData.cases).format("0,0")}</h1>
      </div>
      <div className="live_corona_cases">
        <CasesLine
          title="Active Cases"
          squareColor="purple"
          todayCases={casesData.todayCases}
          totalCases={casesData.active}
        />
        <CasesLine
          title="Recovered"
          squareColor="green"
          todayCases={casesData.todayRecovered}
          totalCases={casesData.recovered}
        />
        <CasesLine
          title="Deaths"
          squareColor="red"
          todayCases={casesData.todayDeaths}
          totalCases={casesData.deaths}
        />
        <div className="vaccine_dose_container flex align_center justify_between">
          <div className="title flex align_center">
            <FontAwesomeIcon className="faSyringe" icon={faSyringe} />
            <p>Vaccine Doses</p>
          </div>
          <div className="value flex align_center">
            <p>{numeral(vaccineCount.y).format("0,0")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoronaCasesInfo;
