import React from 'react';
import PublicProfile from '../../components/public-profile/public-profile.component';
import {PublicProfilePageContainer} from './public-profile-page.styles';

const PublicProfilePage = ({match}) => {

    return <PublicProfilePageContainer><PublicProfile userId={match.params.userId}/></PublicProfilePageContainer>
}

export default PublicProfilePage;