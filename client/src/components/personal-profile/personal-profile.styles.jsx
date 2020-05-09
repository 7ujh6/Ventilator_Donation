import styled, {css} from 'styled-components';

const getBlurEffectStyle = ({popUp}) => {
    
    if (popUp)
        return blurEffectStyle;
    else
        return null;
}

export const PersonalProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20vw;
`;

export const HeaderButtonsContainer = styled.div`
    text-align: right;
`;

export const ImageContainer = styled.div`
    height: 250px;
    width: 250px;
    position: relative;
    left: 100px;
    top: -60px;
`;

export const ProfileIconContainer = styled.div`
    ${getBlurEffectStyle}
    border-radius: 50%;
    margin: 50px 23vw;
`;

export const ProfileIcon = styled.img`
    position: relative;
    left: -5%;
    border-radius: 50%;

    @media screen and (max-width: 800px) {
        left: -35%;
    }
`;

export const ButtonsContainer = styled.div`
    ${getBlurEffectStyle}
    margin: 30px 15vw;
    @media screen and (max-width: 800px) {
        margin: 30px -5vw;
    }

`;

export const DisplayNameContainer = styled.span`
    ${getBlurEffectStyle}
    position: relative;
    left: 19vw;

    @media screen and (max-width: 800px) {
        left: 10%;
    }

`;

export const FormContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    left: 15vw;
    top: 10px;
    margin-top: 11px;
    margin-bottom: 30px;
    
    ${getBlurEffectStyle}
`;

export const FileInput = styled.input`
  opacity: 0;
  z-index: 1;
  position: absolute;
  width: 275px; 
  height: 50px;   
  `;

export const CancelButtonWithTooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  left: 20px;
  
`;

export const TooltipText = styled.span`
  
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;

  &:hover {
    visibility: visible
  }
`;

const blurEffectStyle = css`
    filter: blur(8px);
`;