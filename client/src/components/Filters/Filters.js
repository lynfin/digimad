import React, { useEffect, useState } from 'react';
import {
  Heading,
  TextWrapper,
  ContainerDEFAULT,
  Header,
  Row,
  RowDEFAULT,
  Column,
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
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  // const [country, setCountry] = useState('US');
  const [mergedFilteredCountries, setMergedFilteredCountries] = useState([]);
  // console.log('mergedFilteredCountries: ');
  // console.log(mergedFilteredCountries);
  // console.log('locations: ');
  // console.log(locations);

  useEffect(() => {
    const filterForKnownDestinations = (el) => {
      const searchText = el.name.toLocaleLowerCase().trim();
      const located = locations.find((loc) =>
        loc.country.toLocaleLowerCase().trim().includes(searchText)
      );
      return located;
    };

    const filteredAllCountries = data.filter((el) =>
      filterForKnownDestinations(el)
    );

    const mappedCountryData = filteredAllCountries.map((item, i) => {
      return Object.assign(
        {},
        item,
        locations.find((loc) =>
          loc.country
            .toLocaleLowerCase()
            .trim()
            .includes(item.name.toLocaleLowerCase().trim())
        )
      );
    });
    setMergedFilteredCountries(mappedCountryData);

    // setMergedFilteredCountries(
    //   data
    //     .filter((el) => filterForKnownDestinations(el))
    //     .map((item, i) => {
    //       if (
    //         item.name.toLocaleLowerCase().trim() ===
    //         locations[i].country.toLocaleLowerCase().trim()
    //       ) {
    //         return Object.assign({}, item, locations[i]);
    //       } else {
    //         console.log(
    //           `${item.name
    //             .toLocaleLowerCase()
    //             .trim()} DID NOT MATCH ${locations[i].country
    //             .toLocaleLowerCase()
    //             .trim()}`
    //         );
    //         return null;
    //       }
    //     })
    //);
  }, [locations]);
  const cityChoices =
    selectedCountry !== 'All' && mergedFilteredCountries.length
      ? mergedFilteredCountries.find(
          (country) => country.name === selectedCountry
        ).cities
      : [];
  return (
    <FiltersSection id='filters'>
      <FiltersWrapper>
        <Column justify='space-between'>
          <Header color='white'>Refine your search:</Header>
          <Row justify='space-between' align='center' mt='4rem' padding='20px'>
            {mergedFilteredCountries.length ? (
              <Row
                justify='space-between'
                align='center'
                mt='4rem'
                padding='20px'
              >
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
              </Row>
            ) : null}
            <Dropdown
              selectedName={selectedCategory}
              setSelectedName={setSelectedCategory}
              dropdownOptions={categories}
              showFlag={false}
              label={'Category'}
            />
          </Row>
        </Column>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
