import React, { useState, useRef, useEffect } from 'react';
import Flag from 'react-flagkit';
import { IconContext } from 'react-icons';
import { AiOutlineCaretDown } from 'react-icons/ai';
import DropdownList from '../DropdownList/DropdownList';

import { DropdownBox, DropdownContainer } from './DropdownStyles';
import { Text, SubHeading, TextWrapper } from '../../globalStyles';

const Dropdown = ({
  selectedName,
  setSelectedName,
  dropdownOptions,
  showFlag,
  label,
}) => {
  const ref = useRef();
  const listRef = useRef();
  const [show, setShow] = useState(false);

  const closeDropdown = (el) => {
    setSelectedName(el.name);
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
      <SubHeading>
        <Text size='1.3rem'>{label}</Text>
      </SubHeading>
      <DropdownBox ref={ref} onClick={() => setShow(true)}>
        {showFlag && selectedName !== 'All' ? (
          <Flag
            size={32}
            country={
              dropdownOptions.find((opt) => opt.name === selectedName).code
            }
          />
        ) : null}
        <Text color='black'>{selectedName}</Text>
        <IconContext.Provider value={{ size: '1.3em', color: 'darkgray' }}>
          <AiOutlineCaretDown />
        </IconContext.Provider>
      </DropdownBox>
      <DropdownList
        listRef={listRef}
        show={show}
        closeDropdown={closeDropdown}
        dropdownOptions={dropdownOptions}
        showFlag={showFlag}
        label={label}
      />
    </DropdownContainer>
  );
};

export default Dropdown;
