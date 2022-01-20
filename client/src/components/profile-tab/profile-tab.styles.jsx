import styled, {css} from 'styled-components';


const getActivityIconStyles = ({activityStatus}) => {
    
    if (activityStatus === "online")
        return onlineIconStyles;
    else
        return offlineIconStyles;
}

export const ProfileTabContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 20rem;
    height: 15rem;
    border: black solid;
    border-radius: 5px;
    margin: 0 0 2rem 2rem;
    cursor: pointer;
`;

export const DisplayName =  styled.span`
    pointer: cursor;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 15%;
    margin: 2rem 50% 0 50%;
`;


export const ActivityIcon = styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 0 0 1rem;

    ${getActivityIconStyles}

`;

const onlineIconStyles = css`
    background-color: green;   
`;

const offlineIconStyles = css`
    background-color: red;
`;

