import React, { useState } from 'react';
import {
  Heading,
  TextWrapper,
  ContainerDEFAULT,
  Header,
  RowDEFAULT,
} from '../../globalStyles';
import { FiltersSection, FiltersWrapper } from './FiltersStyles';
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
            />
          </RowDEFAULT>
        </ContainerDEFAULT>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
