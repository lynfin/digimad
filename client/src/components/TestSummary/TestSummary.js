import React from 'react';
import { useState, useEffect } from 'react';
import ConnectionTypeSummary from '../ConnectionTypeSummary/ConnectionTypeSummary';
import { Heading, SubHeading } from '../../globalStyles';

import { TestSummarySection, TestSummaryWrapper } from './TestSummaryStyles';

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
        <Heading inverse>Speedtest Details</Heading>
        <SubHeading inverse>{destinationName}</SubHeading>

        {connectionTypes ? (
          <SubHeading inverse>
            {connectionTypes.length} connection types
          </SubHeading>
        ) : null}
      </TestSummaryWrapper>
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
    </TestSummarySection>
  );
}
export default TestSummary;
