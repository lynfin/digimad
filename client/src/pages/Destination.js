import React from 'react';
import { useState, useEffect } from 'react';
import { Container, MainHeading, TextWrapper } from '../globalStyles';
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
    fetch(`/destinations/${state.el.id}?full`).then((res) => {
      if (res.ok) {
        res.json().then(setDestinationDetails);
      } else {
        res.json().then((data) => console.log(data.error));
      }
    });
  }, [state.el]);

  // Initially had trouble setting selectedDestination at App level
  // so used state with Link to pass in the destination overview.
  // Might be able to get rid of state.el and just use selectedDestination now.
  return (
    <>
      {state && state.el && destinationDetails ? (
        <>
          <DestinationHero
            destination_overview={state.el}
            destinationDetails={destinationDetails}
          />
          <SpeedSummary
            destination_overview={state.el}
            selectedDestination={selectedDestination}
            destinationDetails={destinationDetails}
          />
          <TestSummary
            destinationId={destinationDetails.id}
            destinationName={destinationDetails.name}
          />
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