import { useState, useEffect } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);
  return (
    <Section>
      <Container>
        {loading && <Loader />}

        <CountryList countries={countries} />

        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}
      </Container>
    </Section>
  );
};
