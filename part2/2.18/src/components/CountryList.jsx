const CountryList = ({ countries, onShowCountry }) => {
  if (countries.length === 0) {
    return <div>No countries found.</div>;
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} />;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          {country.name.common}{' '}
          <button onClick={() => onShowCountry(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
import Country from './Country';
