import React from 'react';
import { Container, MainHeading, TextWrapper } from '../globalStyles';
import SpeedSummary from '../components/SpeedSummary/SpeedSummary';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { useLocation } from 'react-router-dom';

function Destination({ user, selectedDestination }) {
  const location = useLocation();
  const state = location.state;
  console.log(user);
  console.log(state);
  return (
    <>
      {state && state.el ? (
        <SpeedSummary
          destination_overview={state.el}
          selectedDestination={selectedDestination}
        />
      ) : (
        <Container>
          <ErrorPage message='No destination selected' />
        </Container>
      )}
    </>
  );
}

export default Destination;
