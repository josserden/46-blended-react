import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const { countries, loading, error } = useFetchCountries();

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
