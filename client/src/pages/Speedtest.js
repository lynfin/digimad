import React from 'react';
import SpeedtestForm from '../components/SpeedtestForm/SpeedtestForm';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { Container } from '../globalStyles';

function Speedtest({ user, selectedDestination }) {
  return (
    <Container>
      {user ? (
        <SpeedtestForm user={user} selectedDestination={selectedDestination} />
      ) : (
        <ErrorPage message='...please log in first...' />
      )}
    </Container>
  );
}

export default Speedtest;
