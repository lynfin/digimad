import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormTitleGrouped,
  FormSubTitle,
  FormSmallButton,
  FormButtons,
  FormInstruction,
  FormImgWrapper,
  FormAvatar,
} from '../../formStyles';
import { Container } from '../../globalStyles';
import StarRating from '../StarRating/StarRating';
import validateForm from './validateForm';

function SpeedtestForm({ user, selectedDestination }) {
  const date = new Date();
  const formattedToday =
    date.getFullYear().toString() +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' +
    date.getDate().toString().padStart(2, 0);

  const [latency, setLatency] = useState(0.0);
  const [download, setDownload] = useState(0.0);
  const [upload, setUpload] = useState(0.0);
  const [connectiontype, setConnectiontype] = useState('wifi');
  const [connectionprovider, setConnectionprovider] = useState('');
  const [testprovider, setTestprovider] = useState('');
  const [resulturl, setResulturl] = useState('');
  const [resultimage, setResultimage] = useState('');
  const [start, setStart] = useState(formattedToday);
  const [end, setEnd] = useState(formattedToday);
  const [desc, setDesc] = useState('');
  const [techRating, setTechRating] = useState(0);
  const [techComment, setTechComment] = useState('');
  const [visitRating, setVisitRating] = useState(0);
  const [visitComment, setVisitComment] = useState('');

  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = [];
    // const resultError = validateForm({
    //   latency,
    //   download,
    //   upload,
    //   connectiontype,
    //   connectionprovider,
    //   testprovider,
    //   resulturl,
    //   resultimage,
    //   start,
    //   end,
    //   techRating,
    //   visitRating,
    // });

    if (resultError.length) {
      setError(resultError);
      return;
    }

    const visit_attributes = {
      start,
      end,
      user_id: user ? user.id : null,
      destination_id: selectedDestination ? selectedDestination.id : null,
      desc,
      tech_rating: techRating,
      tech_comment: techComment,
      visit_rating: visitRating,
      visit_comment: visitComment,
    };

    fetch(`/speedtests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latency,
        download,
        upload,
        connectiontype,
        connectionprovider,
        testprovider,
        resulturl: resulturl ? resulturl : null,
        resultimage: resultimage ? resultimage : null,
        visit_attributes,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((speedtest) => {
          // WILL NEED TO UPDATE LOCAL COPY
          //onTest(speedtest);
          console.log(speedtest);
          history.push('/destination');
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
    // setSuccess('Test submitted!');
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: 'Start Date',
      value: start,
      onChange: (e) => setStart(e.target.value),
      type: 'date',
    },
    {
      label: 'End Date',
      value: end,
      onChange: (e) => setEnd(e.target.value),
      type: 'date',
    },
    {
      label: 'Notes',
      value: desc,
      onChange: (e) => setDesc(e.target.value),
      type: 'text',
    },
    {
      label: 'Tech Rating',
      value: techRating,
      onChange: setTechRating,
      type: 'star',
    },
    {
      label: 'Tech Comments',
      value: techComment,
      onChange: (e) => setTechComment(e.target.value),
      type: 'text',
    },
    {
      label: 'Visit Rating',
      value: visitRating,
      onChange: setVisitRating,
      type: 'star',
    },
    {
      label: 'Visit Comments',
      value: visitComment,
      onChange: (e) => setVisitComment(e.target.value),
      type: 'text',
    },
    {
      label: 'Download',
      value: download,
      onChange: (e) => setDownload(e.target.value),
      type: 'number',
    },
    {
      label: 'Upload',
      value: upload,
      onChange: (e) => setUpload(e.target.value),
      type: 'number',
    },
    {
      label: 'Latency',
      value: latency,
      onChange: (e) => setLatency(e.target.value),
      type: 'number',
    },
    {
      label: 'Connection Type',
      value: connectiontype,
      onChange: (e) => setConnectiontype(e.target.value),
      type: 'text',
    },
    {
      label: 'Cell Provider',
      value: connectionprovider,
      onChange: (e) => setConnectionprovider(e.target.value),
      type: 'text',
    },
    {
      label: 'Test Provider',
      value: testprovider,
      onChange: (e) => setTestprovider(e.target.value),
      type: 'text',
    },

    {
      label: 'Result URL',
      value: resulturl,
      onChange: (e) => setResulturl(e.target.value),
      type: 'text',
    },
    {
      label: 'Result Image',
      value: resultimage,
      onChange: (e) => setResultimage(e.target.value),
      type: 'text',
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitleGrouped>Speedtest</FormTitleGrouped>
            <FormSubTitle>
              {selectedDestination
                ? selectedDestination.name
                : 'destination required'}
            </FormSubTitle>
            <FormButtons>
              <FormSmallButton
                onClick={() => openInNewTab('https://www.speedtest.net/')}
              >
                Speedtest
              </FormSmallButton>
              <FormSmallButton
                onClick={() => openInNewTab('https://www.speedcheck.org/')}
              >
                Speedcheck
              </FormSmallButton>
            </FormButtons>
            <FormInstruction>
              Select a button to run your speedtest.
            </FormInstruction>
            <FormInstruction>
              Once complete, return here to log the results.
            </FormInstruction>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  {el.type === 'star' ? (
                    <StarRating
                      value={el.value}
                      size='20px'
                      spacing='5px'
                      color='orange'
                      changeRating={el.onChange}
                    />
                  ) : (
                    <FormInput
                      type={el.type}
                      placeholder={
                        el.placeholder
                          ? el.placeholder
                          : `Enter your ${el.label.toLocaleLowerCase()}`
                      }
                      value={el.value}
                      onChange={el.onChange}
                    />
                  )}
                </FormInputRow>
              ))}
              <FormRow>
                <FormColumn>
                  <FormSmallButton type='submit'>
                    {isLoading ? 'Loading...' : 'Submit'}
                  </FormSmallButton>
                </FormColumn>
              </FormRow>
            </FormWrapper>
            {errors &&
              errors.map((err) => (
                <FormMessage
                  key={err}
                  variants={messageVariants}
                  initial='hidden'
                  animate='animate'
                >
                  {err}
                </FormMessage>
              ))}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
}

export default SpeedtestForm;
