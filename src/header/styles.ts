import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #eaeaea;
  border: 1px solid #c9c9c9;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  width: 94%;
  overflow: hidden;
  top: 0;
`;

export const BoxLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
`;


export const Logo = styled.div`
  display: flex;
  border: 1px solid #818181;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const LogoDS = styled.h4`
  color: #b769a3;
`;

export const LogoText = styled.p`
  color: #b769a3;
  font-size: 22px;
  padding-left: 15px;
`;

export const BoxCart= styled(Link)`
  text-decoration: none;
  color: #000000;
`;


export const BoxProductInCartLength = styled.div`
  border: 1px solid;
  background-color: #000000;
  width: 18px;
  height: 20px;
  border-radius: 30px;
  position: absolute;
  top: 4px;
  right: 32px;
`;
export const ProductInCartLength = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  top: -13px;
  right: 5px;
`;