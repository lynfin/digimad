import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList/DropdownList';

import { CurrencyDropdown, DropdownContainer } from './DropdownStyles';
import { Text } from '../../globalStyles';

const Dropdown = ({
  country,
  setCountry,
  filterCountry,
  setFilterCountry,
  locations,
  mergedFilteredCountries,
  showFlag,
}) => {
  const ref = useRef();
  const listRef = useRef();
  const [show, setShow] = useState(false);

  const closeDropdown = (el) => {
    setFilterCountry(el.name);
    setCountry(el.code);
    setShow(false);
  };

  useEffect(() => {
    const handleMouseClick = (e) => {
      // This was intended to close the dropdown if click outside the dropdown
      // but it is causing dropdown to open/close immediately
      //   if (show && !listRef?.current?.contains(e.target)) {
      //     setShow(false);
      //   }
    };

    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, [show, ref]);

  useEffect(() => {
    if (show && window.innerWidth <= 960) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'scroll';
  }, [show]);

  return (
    <DropdownContainer>
      <CurrencyDropdown ref={ref} onClick={() => setShow(true)}>
        {showFlag ? <Flag size={32} country={country} /> : null}
        <Text color='black'>{filterCountry}</Text>
        <IconContext.Provider value={{ size: '1.3em', color: 'darkgray' }}>
          <AiOutlineCaretDown />
        </IconContext.Provider>
      </CurrencyDropdown>
      <DropdownList
        listRef={listRef}
        setCountry={setCountry}
        setFilterCountry={setFilterCountry}
        show={show}
        closeDropdown={closeDropdown}
        locations={locations}
        mergedFilteredCountries={mergedFilteredCountries}
        showFlag={showFlag}
      />
    </DropdownContainer>
  );
};

export default Dropdown;
