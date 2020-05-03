import React from 'react';
import {HomePageContainer, InfoGraphicContainer, StatementContainer} from './homepage.styles';
import {WEBSITE_TEXT} from '../../assets/website-text';
const HomePage = () => {
    const {welcome_text} = WEBSITE_TEXT;
    return <HomePageContainer>
        <InfoGraphicContainer>
            <span>{welcome_text}</span>
        </InfoGraphicContainer>
    </HomePageContainer>
}
export default HomePage;