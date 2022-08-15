import React from 'react';
import { useState, useEffect } from 'react';
import ConnectionTypeSummary from '../ConnectionTypeSummary/ConnectionTypeSummary';
import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
} from '../../globalStyles';

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
  const [connectionTypes, setConnectionTypes] = useState(null);

  useEffect(() => {
    fetch(`/visits/?dest=${destinationId}`).then((res) => {
      if (res.ok) {
        res.json().then(setSpeedtestDetails);
      } else {
        res.json().then((data) => console.log(data.error));
      }
    });
  }, [destinationId]);

  useEffect(() => {
    const uniques = speedtestDetails
      ? [
          ...new Set(
            speedtestDetails.map((obj) => {
              return obj.speedtest.connectiontype;
            })
          ),
        ]
      : null;
    setConnectionTypes(uniques);
  }, [speedtestDetails]);
  return (
    <TestSummarySection id='TestSummary'>
      <TestSummaryWrapper>
        <Heading>THIS WILL BE TEST SUMMARY</Heading>
        <SubHeading>FOR {destinationName}</SubHeading>
        {speedtestDetails ? (
          <SubHeading>{speedtestDetails.length} tests retrieved</SubHeading>
        ) : null}
        {connectionTypes ? (
          <SubHeading>
            {connectionTypes.length} connection types detected
          </SubHeading>
        ) : null}

        {connectionTypes
          ? connectionTypes.map((connectionType, index) => (
              <ConnectionTypeSummary
                key={index}
                connectionType={connectionType}
                connectionData={speedtestDetails.filter(
                  (testData) =>
                    testData.speedtest.connectiontype === connectionType
                )}
              />
            ))
          : null}
      </TestSummaryWrapper>
    </TestSummarySection>
  );
}
export default TestSummary;
