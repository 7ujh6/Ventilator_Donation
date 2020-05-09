import styled from 'styled-components';

export const HowToUsePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: solid;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Image = styled.img`
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 800px) {
        width: 50px;
        height: 75px;
    }
`;

export const InstructionContainer = styled.h2`
    text-align: center;
`;