import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <>
      <Grid>
        {countries.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <img src={flag} alt={country} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
