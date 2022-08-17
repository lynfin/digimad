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

function Filters({}) {
  const [country, setCountry] = useState('US');
  console.log('current country is ', country);
  return (
    <FiltersSection>
      <FiltersWrapper>
        <ContainerDEFAULT>
          <Header color='red'>Filters</Header>
          <RowDEFAULT justify='center' align='center' mt='4rem'>
            <Dropdown country={country} setCountry={setCountry} />
          </RowDEFAULT>
        </ContainerDEFAULT>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
