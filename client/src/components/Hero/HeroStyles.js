import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroDiv = styled.div`
  object-fit: fill;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
  background-image: ${({ img }) => (img ? `url(${img})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  background-position: center;

  opacity: 0.4;
`;
//url('./assets/ooklaMap.png')
// export const HeroDiv = styled.div`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
//   top: 0;
//   position: absolute;
//   z-index: -1;
//   background-image: ${({ img }) => (img ? img : '')};
// `;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;
