import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const LabelContainer = styled.span`
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    padding: 0px;
    margin: 15px;

`;

export const DropdownLink = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: black;
    text-align: center;
    padding: 0px;
    margin: 15px;
`;