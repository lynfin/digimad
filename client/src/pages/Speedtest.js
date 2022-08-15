import React from 'react';
import SpeedtestForm from '../components/SpeedtestForm/SpeedtestForm';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { Container } from '../globalStyles';
import { useHistory, useLocation } from 'react-router-dom';

function Speedtest({ user, selectedDestination }) {
  const location = useLocation();
  const state = location.state;
  console.log('state:');
  console.log(state);
  console.log('user:');
  console.log(user);
  console.log('selectedDestination:');
  console.log(selectedDestination);
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
