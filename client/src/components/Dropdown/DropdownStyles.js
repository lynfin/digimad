import styled from 'styled-components';

export const DropdownContainer = styled.div`
  @media screen and (min-width: 961px) {
    position: relative;
  }
`;

export const DropdownBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.1rem;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: lightslategray;
    border: 1px solid #c2c2c2;
    transition: background 0.3s ease-in;
  }
`;
