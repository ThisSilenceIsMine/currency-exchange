/**
 *
 * Header
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export function Header() {
  return (
    <Div>
      <Nav>
        <NavLink to="/">Калькулятор</NavLink>
        <NavLink to="/calc">Курс</NavLink>
      </Nav>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70px;
  left: 0px;
  top: 0px;
  background-color: gray;
  vertical-align: center;
`;

const Nav = styled.nav`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &::before {
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    content: '';
    background: #ec644b;
    height: 1px;
    width: 0;
    color: #ec644b;
    transition: 0.1s;
  }
  &:hover::before {
    width: 100%;
  }
`;
