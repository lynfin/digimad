import React from 'react';
import { Heading, TextWrapper } from '../../globalStyles';
import { LoadingPageSection, LoadingPageWrapper } from './LoadingPageStyles';

function LoadingPage({ message }) {
  return (
    <LoadingPageSection id='LoadingPage'>
      <LoadingPageWrapper>
        <Heading>Loading</Heading>
        <TextWrapper
          mb='1.4rem'
          weight='600'
          size='1.1rem'
          color='white'
          align='center'
        >
          {message}
        </TextWrapper>
      </LoadingPageWrapper>
    </LoadingPageSection>
  );
}
export default LoadingPage;
