import React, { useEffect, useState } from 'react';
import {
  Heading,
  TextWrapper,
  ContainerDEFAULT,
  Header,
  RowDEFAULT,
} from '../../globalStyles';
import { FiltersSection, FiltersWrapper } from './FiltersStyles';
import data from './data.json';
import Dropdown from '../Dropdown/Dropdown';

// <FiltersSection id='FiltersSection'>
// <FiltersWrapper>
//   <Heading>Filters</Heading>
//   <RowDEFAULT justify='center' align='center' mt='4rem'>
//     <Dropdown country={country} setCountry={setCountry} />
//   </RowDEFAULT>
// </FiltersWrapper>
// </FiltersSection>

function Filters({
  locations,
  country,
  setCountry,
  filterCountry,
  setFilterCountry,
}) {
  // const [country, setCountry] = useState('US');
  const [mergedFilteredCountries, setMergedFilteredCountries] = useState('');
  useEffect(() => {
    const filterForKnownDestinations = (el) => {
      const searchText = el.name.toLocaleLowerCase().trim();
      const located = locations.find((loc) =>
        loc.country.toLocaleLowerCase().trim().includes(searchText)
      );
      return located;
    };
    setMergedFilteredCountries(
      data
        .filter((el) => filterForKnownDestinations(el))
        .map((item, i) => {
          if (item.name === locations[i].country) {
            return Object.assign({}, item, locations[i]);
          } else return null;
        })
    );
  }, [locations]);
  console.log('filterCountry is ', filterCountry);
  return (
    <FiltersSection>
      <FiltersWrapper>
        <ContainerDEFAULT>
          <Header color='white'>Choose your destination:</Header>
          <RowDEFAULT justify='center' align='center' mt='4rem'>
            <Dropdown
              country={country}
              setCountry={setCountry}
              filterCountry={filterCountry}
              setFilterCountry={setFilterCountry}
              locations={locations}
              mergedFilteredCountries={mergedFilteredCountries}
              showFlag={true}
            />
            <Dropdown
              country={country}
              setCountry={setCountry}
              filterCountry={filterCountry}
              setFilterCountry={setFilterCountry}
              locations={locations}
              mergedFilteredCountries={mergedFilteredCountries}
              showFlag={false}
            />
          </RowDEFAULT>
        </ContainerDEFAULT>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
