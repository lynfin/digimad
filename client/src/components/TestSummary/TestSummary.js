import React from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
} from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  TestSummarySection,
  TestSummaryWrapper,
  TestSummaryContainer,
  TestSummaryCardInfo,
  TestSummaryCardPlan,
  TestSummaryCardCost,
  TestSummaryCardFeatures,
  TestSummaryCardText,
  TestSummaryCardFeature,
  TestSummaryCard,
} from './TestSummaryStyles';

function TestSummary({ destinationId, destinationName }) {
  const [speedtestDetails, setSpeedtestDetails] = useState(null);

  useEffect(() => {
    fetch(`/visits/?dest=${destinationId}`).then((res) => {
      if (res.ok) {
        res.json().then(setSpeedtestDetails);
      } else {
        res.json().then((data) => console.log(data.error));
      }
    });
  }, [destinationId]);

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <TestSummarySection id='TestSummary'>
        <TestSummaryWrapper>
          <Heading>THIS WILL BE TEST SUMMARY</Heading>
          <SubHeading>FOR {destinationName}</SubHeading>
        </TestSummaryWrapper>
      </TestSummarySection>
    </IconContext.Provider>
  );
}
export default TestSummary;
