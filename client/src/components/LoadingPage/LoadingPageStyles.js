import styled from 'styled-components';

export const LoadingPageSection = styled.div`
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101522;
`;

export const LoadingPageWrapper = styled.div`
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
