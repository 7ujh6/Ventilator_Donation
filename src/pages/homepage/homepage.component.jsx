import React from 'react';
import {HomePageContainer, InfoGraphicContainer, StatementContainer} from './homepage.styles';
import {WEBSITE_TEXT} from '../../assets/website-text';
const HomePage = () => {
    const {call_to_action} = WEBSITE_TEXT;
    return <HomePageContainer>
        <InfoGraphicContainer>
            <span>{call_to_action}</span>
        </InfoGraphicContainer>
        <StatementContainer>
        <span>{call_to_action}</span>
        </StatementContainer>
    </HomePageContainer>
}
export default HomePage;