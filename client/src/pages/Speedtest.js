import React from 'react';
import SpeedtestForm from '../components/SpeedtestForm/SpeedtestForm';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { Container } from '../globalStyles';
import { useHistory, useLocation } from 'react-router-dom';

function Speedtest({ user, selectedDestination, onDestinationUpdated }) {
  return (
    <Container>
      {user ? (
        <SpeedtestForm
          user={user}
          selectedDestination={selectedDestination}
          onDestinationUpdated={onDestinationUpdated}
        />
      ) : (
        <ErrorPage message='...please log in first...' />
      )}
    </Container>
  );
}

export default Speedtest;
