import Filter from './components/Filter'
import CountryList from './components/CountryList'
import countryServices from './services/countries'
import { useEffect, useState } from 'react'
const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <CountryList countries={countriesToShow} onShowCountry={(country) => setFilter(country.name.common)} />
    </div>
  )
}
export default App
