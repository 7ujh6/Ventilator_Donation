import styled, {css} from 'styled-components';

const getActivityIconStyles = ({activityStatus}) => {
    
    if (activityStatus === "online")
        return onlineIconStyles;
    else
        return offlineIconStyles;
}
// TODO justify content center and the align content in a column to get everything aligned
export const PublicProfileContainer = styled.div`
    padding-bottom: 2rem;
`;


export const ProfileIconContainer = styled.div`
    width: 75%;
    border-radius: 50%;
    margin: 0 0 2rem 32.5%;
`;

export const ProfileIcon = styled.img`

`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

export const DisplayNameContainer = styled.span`
`;


export const ButtonsContainer = styled.div`

    @media screen and (max-width: 800px) {
        left: 0%;
    }

`;

export const ActivityIcon = styled.span`
    height: 25px,
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    ${getActivityIconStyles}
`;

const onlineIconStyles = css`
    background-color: green;   
`;

const offlineIconStyles = css`
    background-color: red;
`;