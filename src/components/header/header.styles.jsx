import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;    
`;
export const LogoContainer = styled(Link)`
    
`;

export const DirectoryContainer = styled.div`
    justify-content: flex-end;    
`;

export const DirectoryLink = styled(Link)`
    text-decoration : none;
    color: black;
    justify-content: flex-end;
    margin: 30px;
`;