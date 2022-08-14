import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
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

function SpeedSummary({
  destination_overview,
  selectedDestination,
  destinationDetails,
}) {
  console.log('In SpeedSummary, have access to selected destination:');
  console.log(selectedDestination);
  console.log('In SpeedSummary, have access to destination details:');
  console.log(destinationDetails);

  let connectionTypes = Object.keys(
    destinationDetails.rate_summary.average.download
  ).sort(); //.keys;
  console.log(connectionTypes);
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <SpeedSummarySection id='SpeedSummary'>
        <SpeedSummaryWrapper>
          <Heading>{destination_overview.header}</Heading>

          <TextWrapper
            mb='1.4rem'
            weight='600'
            size='1.1rem'
            color='white'
            align='center'
          >
            Speed test summary
          </TextWrapper>
          <SpeedSummaryContainer>
            {connectionTypes.map((card, index) => (
              <SpeedSummaryCard key={index}>
                <SpeedSummaryCardInfo>
                  <SpeedSummaryCardPlan>{card}</SpeedSummaryCardPlan>
                  <SpeedSummaryCardCost>max</SpeedSummaryCardCost>
                  <SpeedSummaryCardText>download</SpeedSummaryCardText>
                  <SpeedSummaryCardText>upload</SpeedSummaryCardText>
                  <SpeedSummaryCardText>latency</SpeedSummaryCardText>
                  <SpeedSummaryCardCost>average</SpeedSummaryCardCost>
                  <SpeedSummaryCardCost>min</SpeedSummaryCardCost>
                </SpeedSummaryCardInfo>
              </SpeedSummaryCard>
            ))}
            {/* {connectionTypes.map((card, index) => (
              <SpeedSummaryCard key={index}>
                <SpeedSummaryCardInfo>
                  <SpeedSummaryCardPlan>{card}</SpeedSummaryCardPlan>
                  <SpeedSummaryCardCost>{card.price}</SpeedSummaryCardCost>
                  <SpeedSummaryCardText>
                    {card.description}
                  </SpeedSummaryCardText>
                  <SpeedSummaryCardFeatures>
                    {card.features.map((feature, index) => (
                      <SpeedSummaryCardFeature key={index}>
                        {feature}
                      </SpeedSummaryCardFeature>
                    ))}
                  </SpeedSummaryCardFeatures>
                  <Button>Get Started</Button>
                </SpeedSummaryCardInfo>
              </SpeedSummaryCard>
            ))} */}
          </SpeedSummaryContainer>
        </SpeedSummaryWrapper>
      </SpeedSummarySection>
    </IconContext.Provider>
  );
}
export default SpeedSummary;
