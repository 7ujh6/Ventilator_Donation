import styled, {css} from 'styled-components';

const getActivityIconStyles = ({activityStatus}) => {
    
    if (activityStatus === "online")
        return onlineIconStyles;
    else
        return offlineIconStyles;
}

export const PublicProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
`;

export const ProfileIconContainer = styled.div`
    border-radius: 50%;
    @media screen and (max-width: 800px) {
        margin: 0px 100px;
    }

`;

export const ProfileIcon = styled.img`
    position: relative;
    left: 43%;
    border-radius: 50%;

    @media screen and (max-width: 800px) {
        left: 0%;
    }

`;

export const ProfileContainer = styled.div`
        
`;

export const DisplayNameContainer = styled.span`
        position: relative;
        left: 45%;

        @media screen and (max-width: 800px) {
            left: 30vw;
        }
`;

export const ButtonsContainer = styled.div`
        margin-bottom: 30px;
        position: relative;
        left: 35%;
        margin-bottom: 30px;
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