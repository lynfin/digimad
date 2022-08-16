import React from 'react';
import { Heading, TextWrapper } from '../../globalStyles';
import { FiltersSection, FiltersWrapper } from './FiltersStyles';

function Filters({}) {
  return (
    <FiltersSection id='LoadingPage'>
      <FiltersWrapper>
        <Heading>Filters</Heading>
        <TextWrapper
          mb='1.4rem'
          weight='600'
          size='1.1rem'
          color='white'
          align='center'
        >
          filter here
        </TextWrapper>
      </FiltersWrapper>
    </FiltersSection>
  );
}
export default Filters;
