import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
const data = [
  {
    to: '/',
    text: 'Home',
    id: 'filters',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/userlogin',
    text: 'Login',
  },
];
// Add logo attribution
// <a href="https://www.flaticon.com/free-icons/global" title="global icons">Global icons created by Freepik - Flaticon</a>
const Navbar = ({ user }) => {
  const [show, setShow] = useState(false);

  let history = useHistory();
  let location = useLocation();
  data[2]['text'] = user ? 'Profile' : 'Login';

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon src='./assets/logo.png' alt='logo' />
            DigiMads
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
