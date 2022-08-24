import React from 'react';

import { Heading, SubHeading } from '../../globalStyles';
import SpeedtestCard from '../SpeedtestCard/SpeedtestCard';

import {
  ConnectionTypeSummarySection,
  ConnectionTypeSummaryWrapper,
} from './ConnectionTypeSummaryStyles';

function ConnectionTypeSummary({ connectionType, connectionData }) {
  return (
    <ConnectionTypeSummarySection id='ConnectionTypeSummary'>
      <ConnectionTypeSummaryWrapper>
        <Heading inverse>{connectionType}</Heading>

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
