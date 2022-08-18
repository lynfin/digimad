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
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
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

  const cityChoices =
    selectedCountry !== 'All' && mergedFilteredCountries.length
      ? mergedFilteredCountries.find(
          (country) => country.name === selectedCountry
        ).cities
      : [];
  return (
    <FiltersSection>
      <FiltersWrapper>
        <ContainerDEFAULT>
          <Header color='white'>Choose your destination:</Header>
          {mergedFilteredCountries.length ? (
            <RowDEFAULT justify='center' align='center' mt='4rem'>
              <Dropdown
                selectedName={selectedCountry}
                setSelectedName={setSelectedCountry}
                dropdownOptions={mergedFilteredCountries}
                showFlag={true}
                label={'Country'}
              />
              {selectedCountry !== 'All' && cityChoices.length ? (
                <Dropdown
                  selectedName={selectedCity}
                  setSelectedName={setSelectedCity}
                  dropdownOptions={cityChoices}
                  showFlag={false}
                  label={'City'}
                />
              ) : null}
            </RowDEFAULT>
          ) : null}
        </ContainerDEFAULT>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
