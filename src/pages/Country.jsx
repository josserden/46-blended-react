import { Container, CountryInfo, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    async function getCountry() {
      setLoading(true);
      try {
        const data = await fetchCountry(countryId);

        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCountry();
  }, [countryId]);

  const goBackLink = location?.state?.from ?? '/';

  const { id, flag, capital, countryName, population, languages } = country;

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>

        {loading && <Loader />}
        {error && <Navigate to="/" replace />}

        <CountryInfo
          key={id}
          flag={flag}
          capital={capital}
          country={countryName}
          population={population}
          languages={languages}
        />
      </Container>
    </Section>
  );
};
