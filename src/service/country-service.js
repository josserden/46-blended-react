import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const { data } = await axios.get('/region/europe');
  const countries = transformCountriesData(data);

  return countries;
};

export const fetchCountry = async countryId => {
  const { data } = await axios.get(`/name/${countryId}`);
  const country = transformCountryData(data);

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};
