import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList/DropdownList';
import { CurrencyDropdown, DropdownContainer } from './DropdownStyles';
import { Text } from '../../globalStyles';

const Dropdown = ({ country, setCountry }) => {
  const ref = useRef();
  const listRef = useRef();
  const [show, setShow] = useState(false);

  const closeDropdown = (el) => {
    setCountry(el.code);
    setShow(false);
  };

  useEffect(() => {
    const handleMouseClick = (e) => {
      console.log('handling click, show is ', show);
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
        <Flag size={32} country={country} />
        <Text color='#f4f4f4'>{country}</Text>
        <IconContext.Provider value={{ size: '1.3em', color: '#dfdfdf' }}>
          <AiOutlineCaretDown />
        </IconContext.Provider>
      </CurrencyDropdown>
      <DropdownList
        listRef={listRef}
        setCountry={setCountry}
        show={show}
        closeDropdown={closeDropdown}
      />
    </DropdownContainer>
  );
};

export default Dropdown;
