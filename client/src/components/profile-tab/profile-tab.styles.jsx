import styled, {css} from 'styled-components';


const getActivityIconStyles = ({activityStatus}) => {
    
    if (activityStatus === "online")
        return onlineIconStyles;
    else
        return offlineIconStyles;
}

export const ProfileTabContainer = styled.div`

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

