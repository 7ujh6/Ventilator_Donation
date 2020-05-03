import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #ea4335;
  color: white;
  border: none;

  &:hover {
    background-color: #f34f1c;
    border: none;
  }
`;

const uploadStyles = css`

  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

`;

const profileStyles = css`

  background-color: #ed7014;
  color: white;
  border: none;

  &:hover {
    background-color: #fc6a03;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  else if (props.isUpload) {
    return uploadStyles;
  }
  else if (props.isProfileStyles) {
    return profileStyles;
  } 
  else
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 275px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;

  ${getButtonStyles}
`;
