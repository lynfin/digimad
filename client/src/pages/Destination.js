import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  MainHeading,
  SubHeading,
  TextWrapper,
} from '../globalStyles';
import DestinationHero from '../components/DestinationHero/DestinationHero';
import SpeedSummary from '../components/SpeedSummary/SpeedSummary';
import TestSummary from '../components/TestSummary/TestSummary';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import { useLocation } from 'react-router-dom';

function Destination({ user, selectedDestination }) {
  const location = useLocation();
  const state = location.state;
  const [destinationDetails, setDestinationDetails] = useState(null);

  useEffect(() => {
    if (selectedDestination) {
      fetch(`/destinations/${selectedDestination.id}?full`).then((res) => {
        if (res.ok) {
          res.json().then(setDestinationDetails);
        } else {
          res.json().then((data) => console.log(data.error));
        }
      });
    }
  }, [selectedDestination]);

  // Initially had trouble setting selectedDestination at App level
  // so used state with Link to pass in the destination overview.
  // Might be able to get rid of state.el and just use selectedDestination now.

  return (
    <>
      {/* {state && state.el && destinationDetails ? ( */}
      {destinationDetails ? (
        <>
          <DestinationHero destinationDetails={destinationDetails} />
          <SpeedSummary
            selectedDestination={selectedDestination}
            destinationDetails={destinationDetails}
          />
          {user ? (
            <TestSummary
              destinationId={destinationDetails.id}
              destinationName={destinationDetails.name}
            />
          ) : (
            <SubHeading inverse>Please log in to see test details</SubHeading>
          )}
        </>
      ) : (
        <Container>
          <LoadingPage message='...destination details being retrieved...' />
        </Container>
      )}
    </>
  );
}

export default Destination;
