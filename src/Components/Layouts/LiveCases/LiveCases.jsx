import React, { useState, useEffect } from "react";
import Select from "react-select";
import numeral from "numeral";
import CasesCard from "./CasesCard/CasesCard";
import CountryListTable from "./CountryListTable/CountryListTable";
import LineGraph from "./LineGraph/LineGraph";
import map from "../../../Assets/Images/map.png";
import "./LiveCases.css";
import WorldMap from "./WorldMap/WorldMap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungsVirus, faSyringe } from "@fortawesome/free-solid-svg-icons";
import "leaflet/dist/leaflet.css";

function LiveCases() {
  const [countriesNameISO, setCountriesNameISO] = useState([]);
  const [countryCasesData, setCountryCasesData] = useState({});

  const [casesType, setCasesType] = useState("cases");

  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [mapZoom, setMapZoom] = useState(3);

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
          setCountryCasesData(data.find((res) => res.country == "India"));
          setCountriesNameISO(countriesNameISO);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  // When we change country it give that country data
  const onCountryChange = async (data) => {
    const countryCode = data.value;

    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryCasesData(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
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
    <section className="live_cases_container">
      <div className="map_container container flex justify_between">
        <img src={map} alt="" />
        <div className="live_cases_details">
          <div className="tag">
            <span>Live Update</span>
          </div>
          <div className="title flex align_center">
            <h1>CORONA</h1>
            <div>
              <h3>LIVE</h3>
              <h2>CASES</h2>
            </div>
          </div>
          <div className="detail">
            <p>
              The coronavirus COVID-19 is affecting 219 countries and
              territories. The day is reset after midnight GMT+0. The list of
              countries and their regional classification is based on the United
              Nations Geoscheme.
            </p>
          </div>
          <div className="live_cases_buttons flex align_center">
            <Link className="btn btn_1" to="/">
              Symptoms
              <FontAwesomeIcon className="faShieldVirus" icon={faLungsVirus} />
            </Link>
            <Link className="btn btn_2" to="/">
              Treatment
              <FontAwesomeIcon className="faArrowRight" icon={faSyringe} />
            </Link>
          </div>
        </div>
      </div>
      <div className="worldWideCase_graph_countryList_container">
        <div className="worldWideCase_container">
          <div className="heading flex align_center justify_between">
            <h1>Worldwide Coronavirus Cases</h1>
            <Select
              className="select_box"
              options={countriesNameISO}
              onChange={onCountryChange}
              placeholder="India"
              theme={customTheme}
              maxMenuHeight={250}
            />
          </div>
          <div className="world_wide_case flex align_center justify_between">
            <CasesCard
              active={casesType == "cases"}
              onClick={(e) => setCasesType("cases")}
              title="Confirmed Cases"
              total_cases={numeral(countryCasesData.cases).format("0,0")}
              cases={`+ ${numeral(countryCasesData.todayCases).format("0,0")}`}
              cases_type="from today"
              heading_color="blue"
            />
            <CasesCard
              active={casesType == "deaths"}
              onClick={(e) => setCasesType("deaths")}
              title="Deaths"
              total_cases={numeral(countryCasesData.deaths).format("0,0")}
              cases={`+ ${numeral(countryCasesData.deathsPerOneMillion).format(
                "0,0"
              )}`}
              cases_type="Deaths Per One Million"
              heading_color="red"
            />
            <CasesCard
              active={casesType == "recovered"}
              onClick={(e) => setCasesType("recovered")}
              title="Recovered"
              total_cases={numeral(countryCasesData.recovered).format("0,0")}
              cases={`${(
                1000000 / countryCasesData.recoveredPerOneMillion
              ).toFixed(2)} %`}
              cases_type="ratio of recovery"
              heading_color="green"
            />
            <CasesCard
              // onClick={(e) => setCasesType("active")}
              title="Active Cases"
              total_cases={numeral(countryCasesData.active).format("0,0")}
              cases={`+ ${numeral(countryCasesData.critical).format("0,0")}`}
              cases_type="in Critical / Serious"
              heading_color="purple"
            />
          </div>
        </div>
        <div className="graph_countryList_container flex justify_between">
          <div className="country_list">
            <CountryListTable />
          </div>
          <div className="graph_map flex">
            <div className="line_graph">
              <LineGraph
                casesType={casesType}
                countryForGraph={countryCasesData.country}
              />
            </div>
            <div className="map">
              <h1>World wide cases</h1>
              <WorldMap
                countries={mapCountries}
                casesType={casesType}
                center={mapCenter}
                zoom={mapZoom}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveCases;
