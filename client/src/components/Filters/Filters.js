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

  selectedName,
  setSelectedName,
}) {
  // const [country, setCountry] = useState('US');
  const [mergedFilteredCountries, setMergedFilteredCountries] = useState([]);
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
  console.log(mergedFilteredCountries);
  return (
    <FiltersSection>
      <FiltersWrapper>
        <ContainerDEFAULT>
          <Header color='white'>Choose your destination:</Header>
          {mergedFilteredCountries.length ? (
            <RowDEFAULT justify='center' align='center' mt='4rem'>
              <Dropdown
                selectedName={selectedName}
                setSelectedName={setSelectedName}
                dropdownOptions={mergedFilteredCountries}
                showFlag={true}
              />
              <Dropdown
                selectedName={selectedName}
                setSelectedName={setSelectedName}
                dropdownOptions={mergedFilteredCountries}
                showFlag={false}
              />
            </RowDEFAULT>
          ) : null}
        </ContainerDEFAULT>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
