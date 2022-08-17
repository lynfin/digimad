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
  SpeedSummarySection,
  SpeedSummaryWrapper,
  SpeedSummaryContainer,
  SpeedSummaryCardInfo,
  SpeedSummaryCardPlan,
  SpeedSummaryCardCost,
  SpeedSummaryCardFeatures,
  SpeedSummaryCardText,
  SpeedSummaryCardFeature,
  SpeedSummaryCard,
} from './SpeedSummaryStyles';
//import { SpeedSummaryData } from '../../data/SpeedSummaryData';

function SpeedSummary({ selectedDestination, destinationDetails }) {
  let rate_summary = destinationDetails.rate_summary;
  let connectionTypes = Object.keys(rate_summary.average.download).sort();

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <SpeedSummarySection id='SpeedSummary'>
        <SpeedSummaryWrapper>
          <Heading>Download speeds</Heading>
          <SubHeading>{selectedDestination.name}</SubHeading>

          <TextWrapper
            mb='1.4rem'
            weight='600'
            size='1.1rem'
            color='white'
            align='center'
          >
            based on {destinationDetails.total_tests} user-submitted tests
          </TextWrapper>
          <SpeedSummaryContainer>
            {connectionTypes.map((card, index) => (
              <SpeedSummaryCard key={index}>
                <SpeedSummaryCardInfo>
                  <SpeedSummaryCardPlan>{card}</SpeedSummaryCardPlan>
                  {Object.keys(rate_summary).map((rate, index) => (
                    <Container key={index}>
                      <SpeedSummaryCardCost>
                        {parseFloat(
                          rate_summary[rate]['download'][card]
                        ).toFixed(2)}{' '}
                        Mbps
                      </SpeedSummaryCardCost>
                      <SpeedSummaryCardText>{rate}</SpeedSummaryCardText>
                    </Container>
                  ))}
                </SpeedSummaryCardInfo>
              </SpeedSummaryCard>
            ))}
          </SpeedSummaryContainer>
        </SpeedSummaryWrapper>
      </SpeedSummarySection>
    </IconContext.Provider>
  );
}
export default SpeedSummary;
