import React from "react";
import { TileLayer, MapContainer, Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import "./WorldMap.css";

const casesTypeColors = {
  cases: {
    hex: "#2a81ea",
    multiplier: 800,
  },
  recovered: {
    hex: "#1ee0ac",
    multiplier: 1200,
  },
  deaths: {
    hex: "#1ee0ac",
    multiplier: 1600,
  },
};

function WorldMap({ countries, casesType, center, zoom }) {
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country, index) => (
        <Circle
          key={index}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={casesTypeColors[casesType].hex}
          fillColor={casesTypeColors[casesType].hex}
          fillOpacity={0.4}
          radius={
            Math.sqrt(country[casesType]) *
            casesTypeColors[casesType].multiplier
          }
        >
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{
                  backgroundImage: `url(${country.countryInfo.flag})`,
                }}
              ></div>
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                Cases: {numeral(country.cases).format("0,0")}
              </div>
              <div className="info-recovered">
                Recovered: {numeral(country.recovered).format("0,0")}
              </div>
              <div className="info-deaths">
                Deaths: {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}

export default WorldMap;
