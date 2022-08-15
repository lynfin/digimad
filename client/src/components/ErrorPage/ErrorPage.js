import React from 'react';
import { Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import { ErrorPageSection, ErrorPageWrapper } from './ErrorPageStyles';

function ErrorPage({ message }) {
  return (
    <ErrorPageSection id='SpeedSummary'>
      <ErrorPageWrapper>
        <Heading>Error</Heading>
        <TextWrapper
          mb='1.4rem'
          weight='600'
          size='1.1rem'
          color='white'
          align='center'
        >
          {message}
        </TextWrapper>
      </ErrorPageWrapper>
    </ErrorPageSection>
  );
}
export default ErrorPage;
