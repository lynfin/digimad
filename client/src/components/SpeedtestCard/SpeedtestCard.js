import React from 'react';
import { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
} from '../../globalStyles';

import {
  SpeedtestCardSection,
  SpeedtestWrapper,
  SpeedtestContainer,
  SpeedtestCardInfo,
  SpeedtestCardPlan,
  SpeedtestCardCost,
  SpeedtestCardFeatures,
  SpeedtestCardText,
  SpeedtestCardFeature,
  SpeedtestCardDiv,
} from './SpeedtestCardStyles';

function SpeedtestCard({ testData }) {
  return (
    <SpeedtestWrapper id='Speedtest'>
      <SpeedtestContainer>
        <SpeedtestCardInfo>
          <SpeedtestCardPlan>
            Username: {testData.user.username}
          </SpeedtestCardPlan>
          <SpeedtestCardCost>
            Visit: {format(parseISO(testData.start), 'MM/dd/yyyy')} -{' '}
            {format(parseISO(testData.end), 'MM/dd/yyyy')}
          </SpeedtestCardCost>
          <SpeedtestCardText>{testData.desc}</SpeedtestCardText>
          <SpeedtestCardText>
            Tech Rating: {testData.tech_rating} | {testData.tech_comment}
          </SpeedtestCardText>
          <SpeedtestCardText>
            Visit Rating: {testData.visit_rating} | {testData.visit_comment}
          </SpeedtestCardText>
          <SpeedtestCardText>
            Test: {testData.speedtest.testprovider}
          </SpeedtestCardText>
          <SpeedtestCardCost>
            Download: {testData.speedtest.download} | Upload:{' '}
            {testData.speedtest.upload} | Latency: {testData.speedtest.latency}
          </SpeedtestCardCost>
        </SpeedtestCardInfo>
      </SpeedtestContainer>
    </SpeedtestWrapper>
  );
}
export default SpeedtestCard;
