import countriesData from './../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function getCountryName(code) {
  const oneCountry = countriesData.find((oneCountry) => {
    return oneCountry.alpha3Code === code;
  });

  return oneCountry.name.common;
}

function CountryDetails(props) {
  const { countries } = props;
  const { countryId } = useParams();

  const [foundCountry, setFoundCountry] = useState(null);

  // ! with JSON
  // * const foundCountry = countries.find(
  //  * (country) => country.alpha3Code === countryId
  // *);

  // ! With API

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries/' + countryId
      );

      setFoundCountry(response.data);
    };

    fetchData();
  }, [countryId]);

  if (!foundCountry) {
    return <p className="col-7"> Loading... </p>;
  }

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt={`flag-of-${foundCountry.name.common}`}
        style={{ width: '100px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((alpha3, i) => {
                  return (
                    <li key={i}>
                      <Link to={'/' + alpha3}>{getCountryName(alpha3)}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
