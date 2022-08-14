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
      </ConnectionTypeSummaryWrapper>
    </ConnectionTypeSummarySection>
  );
}
export default ConnectionTypeSummary;
