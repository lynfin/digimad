import React from 'react';
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

function TestSummary({
  destination_overview,
  selectedDestination,
  destinationDetails,
}) {
  let rate_summary = destinationDetails.rate_summary;
  let connectionTypes = Object.keys(rate_summary.average.download).sort();

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <TestSummarySection id='TestSummary'>
        <TestSummaryWrapper>
          <Heading>Download speeds</Heading>
          <SubHeading>{destination_overview.header}</SubHeading>

          <TextWrapper
            mb='1.4rem'
            weight='600'
            size='1.1rem'
            color='white'
            align='center'
          >
            based on {destinationDetails.total_tests} user-submitted tests
          </TextWrapper>
          <TestSummaryContainer>
            {connectionTypes.map((card, index) => (
              <TestSummaryCard key={index}>
                <TestSummaryCardInfo>
                  <TestSummaryCardPlan>{card}</TestSummaryCardPlan>
                  {Object.keys(rate_summary).map((rate, index) => (
                    <Container key={index}>
                      <TestSummaryCardCost>
                        {parseFloat(
                          rate_summary[rate]['download'][card]
                        ).toFixed(2)}{' '}
                        Mbps
                      </TestSummaryCardCost>
                      <TestSummaryCardText>{rate}</TestSummaryCardText>
                    </Container>
                  ))}
                </TestSummaryCardInfo>
              </TestSummaryCard>
            ))}
          </TestSummaryContainer>
        </TestSummaryWrapper>
      </TestSummarySection>
    </IconContext.Provider>
  );
}
export default TestSummary;
