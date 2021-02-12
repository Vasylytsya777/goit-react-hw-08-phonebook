import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  color: #fff;
  background-color: green;
`;

export default HeaderStyled;

export const NavElem = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  font-size: 30px;
  color: lightgrey;
  text-align: center;
  text-transform: uppercase;

  &.${(props) => props.activeClassName} {
    color: black;
  }
`;
