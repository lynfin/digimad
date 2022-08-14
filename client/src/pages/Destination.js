import React from 'react';
import { Container, MainHeading, TextWrapper } from '../globalStyles';
import SpeedSummary from '../components/SpeedSummary/SpeedSummary';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { useLocation } from 'react-router-dom';

function Destination({ user }) {
  const location = useLocation();
  const state = location.state;
  console.log(user);
  console.log(state);
  return (
    <>
      {state && state.el ? (
        <SpeedSummary destination_overview={state.el} />
      ) : (
        <Container>
          <ErrorPage message='No destination selected' />
        </Container>
      )}
    </>
  );
}

export default Destination;
