import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
 
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const SubHeading = styled.h2`
  font-size: clamp(0.5rem, 5vw, 2.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  letter-spacing: 0.4rem;
  line-height: 2.06;
  text-align: center;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : '')};
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : '140px 0')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
  }
`;

const DEFAULT_DIV = styled.div`
  padding: ${({ padding }) => (padding ? padding : '')};
  padding-bottom: ${({ pb }) => (pb ? pb : '')};
  padding-top: ${({ pt }) => (pt ? pt : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  background-color: ${({ background }) => (background ? background : '')};
`;

export const ContainerDEFAULT = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

export const RowDEFAULT = styled(DEFAULT_DIV)`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
`;

export const ColumnDEFAULT = styled(DEFAULT_DIV)`
  display: flex;
  flex-flow: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
`;

export const Header = styled.h1`
  color: ${({ color }) => (color ? color : 'blue')};
  text-align: center;
  margin: 2rem;
`;

export const Text = styled.span`
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  text-align: ${({ align }) => (align ? align : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  height: ${({ height }) => (height ? height : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
  color: ${({ color }) => (color ? color : '')};
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 4px solid #ccc;
  margin: 16px 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: black;
  }
`;
export const Button2 = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  /* color: #fff; */
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
  }
`;
export default GlobalStyle;
