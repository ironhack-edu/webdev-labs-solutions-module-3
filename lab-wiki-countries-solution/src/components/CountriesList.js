import { Link } from 'react-router-dom';

function CountriesList({ countriesData }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group countryCard">
        {countriesData.map((country) => (
          <Link
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
            to={'/' + country.alpha3Code}
          >
            <img
              width="50"
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`flag-of-${country.name.common}`}
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
