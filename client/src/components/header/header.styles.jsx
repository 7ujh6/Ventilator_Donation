import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;
export const LogoContainer = styled(Link)`
`;

export const ProfileContainer = styled.div`
    position: relative;
    left: 64%;
    top: -30px;
`;

export const DirectoryContainer = styled.div`
`;

export const DirectoryLink = styled(Link)`
    text-decoration : none;
    color: black;
    margin: 30px;
`;

export const DirectoryLinksContainer = styled.div`
    justify-content: flex-end;
`;