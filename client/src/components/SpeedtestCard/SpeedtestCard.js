import React from 'react';
import { useState, useEffect } from 'react';

import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
} from '../../globalStyles';

import {
  SpeedtestCardSection,
  SpeedtestCardWrapper,
  SpeedtestCardContainer,
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
    <SpeedtestCardSection id='Speedtest'>
      <SpeedtestCardText>Start Date:</SpeedtestCardText>
      <SpeedtestCardText>End Date:</SpeedtestCardText>
      <SpeedtestCardText>{testData.desc}</SpeedtestCardText>
      <SpeedtestCardText>Tech Rating: {testData.tech_rating}</SpeedtestCardText>
      <SpeedtestCardText>
        Tech Comment: {testData.tech_comment}
      </SpeedtestCardText>
      <SpeedtestCardText>
        Visit Rating: {testData.visit_rating}
      </SpeedtestCardText>
      <SpeedtestCardText>
        Visit Comment: {testData.visit_comment}
      </SpeedtestCardText>
      <SpeedtestCardText>Username: {testData.user.username}</SpeedtestCardText>
      <SpeedtestCardText>
        Test: {testData.speedtest.testprovider}
      </SpeedtestCardText>
      <SpeedtestCardText>
        Download: {testData.speedtest.download}
      </SpeedtestCardText>
      <SpeedtestCardText>Upload: {testData.speedtest.upload}</SpeedtestCardText>
      <SpeedtestCardText>
        Latency: {testData.speedtest.latency}
      </SpeedtestCardText>
    </SpeedtestCardSection>
  );
}
export default SpeedtestCard;
