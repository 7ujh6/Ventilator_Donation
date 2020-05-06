import styled from 'styled-components';


export const DecksButtonContainer =  styled.div`
    height: 55px; 
    cursor: pointer;
`;

export const LeftAddPane =  styled.div`
    position: relative;
    z-index: 0;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 30px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
`;
export const MiddleAddPane = styled.div`
    position: relative;
    z-index: 1;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 50px;
    top: -55px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
    
`;

export const RightAddPane = styled.div`
    position: relative;
    z-index: 2;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 70px;
    top: -110px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
`;


export const LeftPane =  styled.div`
    position: absolute;
    z-index: 0;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 30px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
`;


export const MiddlePane = styled.div`
    position: absolute;
    z-index: 1;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 50px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
`;

export const RightPane = styled.div`
    position: absolute;
    z-index: 2;
    background-color:white;
    height: 55px;
    width: 55px;
    left: 70px;
    border: 2px #a9a9a9 solid;
    border-radius: 25%;
`;

export const PlusIcon = styled.div`
    width: 25px;
    top: -150px;
    position: relative;
    z-index: 2;
    left: 83px;
    height: 60px
`
