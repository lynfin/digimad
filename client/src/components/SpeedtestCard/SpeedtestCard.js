import React from 'react';

import { parseISO, format } from 'date-fns';
import StarRating from '../StarRating/StarRating';
import { Column, Row } from '../../globalStyles';

import {
  SpeedtestWrapper,
  SpeedtestContainer,
  SpeedtestCardInfo,
  SpeedtestCardCost,
  SpeedtestCardText,
  SpeedtestCardDiv,
} from './SpeedtestCardStyles';

function SpeedtestCard({ testData }) {
  return (
    <SpeedtestWrapper id='Speedtest'>
      <SpeedtestContainer>
        <SpeedtestCardInfo>
          <SpeedtestCardDiv>
            <Row background='white' width='1000px' justify='space-between'>
              <Column width='30%' justify='space-between'>
                <SpeedtestCardCost>{testData.user.username}</SpeedtestCardCost>

                <Row>
                  <Column>
                    <SpeedtestCardCost>Visit Dates:</SpeedtestCardCost>
                    <SpeedtestCardText>
                      {format(parseISO(testData.start), 'MM/dd/yyyy')}
                    </SpeedtestCardText>
                    <SpeedtestCardText>
                      {format(parseISO(testData.end), 'MM/dd/yyyy')}
                    </SpeedtestCardText>
                  </Column>
                </Row>
              </Column>
              <Column width='100%'>
                <Row>
                  <SpeedtestCardText>{testData.desc}</SpeedtestCardText>
                </Row>
                <Row justify='space-between'>
                  <Column>
                    <SpeedtestCardCost>Tech Rating:</SpeedtestCardCost>
                  </Column>
                  <Column>
                    <StarRating
                      value={+testData.tech_rating}
                      size='20px'
                      spacing='5px'
                      color='yellow'
                    />
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
                    <StarRating
                      value={+testData.visit_rating}
                      size='20px'
                      spacing='5px'
                      color='yellow'
                    />
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
