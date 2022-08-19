import React from 'react';
import { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import {
  Button,
  Heading,
  SubHeading,
  TextWrapper,
  Container,
  Column,
  Row,
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
  console.log(testData);
  return (
    <SpeedtestWrapper id='Speedtest'>
      <SpeedtestContainer>
        <SpeedtestCardInfo>
          <SpeedtestCardDiv>
            <Row background='' width='800px' justify='space-between'>
              <Column width='30%'>
                <SpeedtestCardPlan>{testData.user.username}</SpeedtestCardPlan>
                <SpeedtestCardCost>Visit Dates:</SpeedtestCardCost>
                <Row>
                  <Column>
                    <SpeedtestCardText>
                      {format(parseISO(testData.start), 'MM/dd/yyyy')}
                    </SpeedtestCardText>
                    <SpeedtestCardText>
                      {format(parseISO(testData.end), 'MM/dd/yyyy')}
                    </SpeedtestCardText>
                  </Column>
                </Row>
              </Column>
              <Column width='70%'>
                <Row>
                  <SpeedtestCardText>{testData.desc}</SpeedtestCardText>
                </Row>
                <Row justify='space-between'>
                  <Column>
                    <SpeedtestCardCost>Tech Rating:</SpeedtestCardCost>
                  </Column>
                  <Column>
                    <SpeedtestCardText>
                      {testData.tech_rating}
                    </SpeedtestCardText>
                  </Column>
                  <Column>
                    <SpeedtestCardText>
                      {testData.tech_comment}
                    </SpeedtestCardText>
                  </Column>
                </Row>
                <Row justify='space-between'>
                  <Column>
                    <SpeedtestCardCost>Visit Rating:</SpeedtestCardCost>
                  </Column>
                  <Column>
                    <SpeedtestCardText>
                      {testData.visit_rating}
                    </SpeedtestCardText>
                  </Column>
                  <Column>
                    <SpeedtestCardText>
                      {testData.visit_comment}
                    </SpeedtestCardText>
                  </Column>
                </Row>
                <Row justify='center'>
                  <SpeedtestCardText>
                    Test: {testData.speedtest.testprovider}
                  </SpeedtestCardText>
                </Row>
                <Row background='' justify='center'>
                  <Row background='' width='100%' justify='space-between'>
                    <Column>
                      <Row>
                        <SpeedtestCardCost>
                          {testData.speedtest.download}
                        </SpeedtestCardCost>
                      </Row>
                      <Row>
                        <SpeedtestCardText>Download</SpeedtestCardText>
                      </Row>
                    </Column>
                    <Column>
                      <Row>
                        <SpeedtestCardCost>
                          {testData.speedtest.upload}
                        </SpeedtestCardCost>
                      </Row>
                      <Row>
                        <SpeedtestCardText>Upload</SpeedtestCardText>
                      </Row>
                    </Column>
                    <Column>
                      <Row>
                        <SpeedtestCardCost>
                          {testData.speedtest.latency}
                        </SpeedtestCardCost>
                      </Row>
                      <Row>
                        <SpeedtestCardText>Latency</SpeedtestCardText>
                      </Row>
                    </Column>
                  </Row>
                </Row>
              </Column>
            </Row>
          </SpeedtestCardDiv>
        </SpeedtestCardInfo>
      </SpeedtestContainer>
    </SpeedtestWrapper>
  );
}
export default SpeedtestCard;
