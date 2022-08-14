import React from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
} from '../../globalStyles';
import SpeedtestCard from '../SpeedtestCard/SpeedtestCard';

import {
  ConnectionTypeSummarySection,
  ConnectionTypeSummaryWrapper,
  ConnectionTypeSummaryContainer,
  ConnectionTypeSummaryCardInfo,
  ConnectionTypeSummaryCardPlan,
  ConnectionTypeSummaryCardCost,
  ConnectionTypeSummaryCardFeatures,
  ConnectionTypeSummaryCardText,
  ConnectionTypeSummaryCardFeature,
  ConnectionTypeSummaryCard,
} from './ConnectionTypeSummaryStyles';

function ConnectionTypeSummary({ connectionType, connectionData }) {
  return (
    <ConnectionTypeSummarySection id='ConnectionTypeSummary'>
      <ConnectionTypeSummaryWrapper>
        <Heading>{connectionType}</Heading>

        <SubHeading>{connectionData.length} tests</SubHeading>
        {connectionData
          ? connectionData.map((speedtestData, index) => (
              <SpeedtestCard key={index} testData={speedtestData} />
            ))
          : null}
      </ConnectionTypeSummaryWrapper>
    </ConnectionTypeSummarySection>
  );
}
export default ConnectionTypeSummary;
