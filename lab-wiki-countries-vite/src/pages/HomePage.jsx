import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-countries-api.herokuapp.com";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
          {countries &&
            countries.map((country) => {
              return (
                <Link
                  key={country.alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  <img
                    width="50"
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`flag-of-${country.name.common}`}
                  />
                  <p>{country.name.common}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
