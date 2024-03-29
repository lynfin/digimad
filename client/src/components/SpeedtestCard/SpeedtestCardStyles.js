import styled from 'styled-components';

export const SpeedtestCardSection = styled.div`
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;

export const SpeedtestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SpeedtestContainer = styled.div`
  display: flex;

  justify-content: center;
  flex-flow: wrap;
  > div {
    margin: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div {
      width: 90%;
    }
  }
`;

export const SpeedtestCardDiv = styled.div`
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;
//width: 1200;
export const SpeedtestCardInfo = styled.div`
  background: white;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 1200px;
  text-decoration: none;
  border-radius: 4px;
  height: 100%;

  display: flex;
  flex-direction: row;
  padding: 24px;
  color: #fff;
  margin: auto;
  > button {
    margin-top: auto;

    &:hover {
      color: black;
      background: white;
      transition: background 0.3s ease;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const SpeedtestCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 2rem;
`;

export const SpeedtestCardCost = styled.h4`
  font-size: 1.2rem;
  color: black;
`;

export const SpeedtestCardText = styled.p`
  font-size: 1.1rem;
  margin: 0.4rem 0 1.3rem;
  color: black;
`;

export const SpeedtestCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const SpeedtestCardFeature = styled.li`
  margin-bottom: 1rem;
  display: flex;
  font-size: 0.94rem;

  &:before {
    content: '🎧';
    margin-right: 0.4rem;
  }
`;
