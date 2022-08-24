import React, { useEffect, useState } from 'react';
import Flag from 'react-flagkit';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SearchInput, Label, List, ListItem } from './DropdownListStyles';
import { AnimatePresence } from 'framer-motion';
import { ContainerDEFAULT, Text } from '../../globalStyles';

const DropdownList = ({
  closeDropdown,
  show,
  listRef,
  dropdownOptions,
  showFlag,
  label,
}) => {
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (!show) {
      setSearch('');
    }
  }, [show]);

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };

  const filterCountry = (el) => {
    const searchText = search.trim().toLocaleLowerCase();

    const name = el.name.toLocaleLowerCase().trim().includes(searchText);
    const code = el.code.toLocaleLowerCase().trim().includes(searchText);

    return code || name;
  };

  function sumCounts(total, option) {
    return option ? (total += option.count) : total;
  }
  const allOption = {
    code: '',
    count: dropdownOptions.reduce(sumCounts, 0),
    name: 'All',
  };
  const fullDropdownOptions = [allOption, ...dropdownOptions];

  return (
    <AnimatePresence>
      {show && (
        <List
          initial={{ opacity: 0, height: '0%' }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0 }}
        >
          <ContainerDEFAULT ref={listRef}>
            <ListItem padding='0' noHover>
              <IconContext.Provider value={{ size: '2em', color: '#c9c9c9' }}>
                <AiOutlineSearch></AiOutlineSearch>
              </IconContext.Provider>
              <SearchInput
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={`Type a ${label.toLocaleLowerCase()}`}
                className='ml-5'
                bc='#fff'
                type='text'
              />
            </ListItem>

            {fullDropdownOptions
              .filter((el) => filterCountry(el))
              .map((el, index) => (
                <ListItem key={index} onClick={() => closeDropdown(el)}>
                  {showFlag ? (
                    <>
                      <Flag size={28} country={el.code} />{' '}
                      <Text>{el.code}</Text>
                    </>
                  ) : null}
                  <Label fontSize='1em'>
                    {el.name} {el.count ? `(${el.count} sites)` : null}
                  </Label>
                </ListItem>
              ))}
          </ContainerDEFAULT>
        </List>
      )}
    </AnimatePresence>
  );
};

export default DropdownList;
