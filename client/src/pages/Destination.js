import React from 'react';
import { useState, useEffect } from 'react';
import { Container, MainHeading, TextWrapper } from '../globalStyles';
import SpeedSummary from '../components/SpeedSummary/SpeedSummary';
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
        <SpeedSummary
          destination_overview={state.el}
          selectedDestination={selectedDestination}
          destinationDetails={destinationDetails}
        />
      ) : (
        <Container>
          <LoadingPage message='...destination details being retrieved...' />
        </Container>
      )}
    </>
  );
}

export default Destination;
