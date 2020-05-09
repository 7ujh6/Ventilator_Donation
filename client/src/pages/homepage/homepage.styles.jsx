import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

export const StatementContainer = styled.div`
    text-align: center;
    margin: 0 30px;
`;
export const InfoGraphicContainer = styled.div`
    border-style: dashed;
    text-align: center;
    margin: 100px 500px;
    @media screen and (max-width: 800px) {
        margin: 100px 50px;
    }
`;