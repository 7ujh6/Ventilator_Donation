import React, {useState, useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import ProfileTab from '../../components/profile-tab/profile-tab.component';
import {UserContext} from '../../providers/user/user.provider';
import {fetchUserArray} from '../../firebase/firebase.utils';
import {TabBanner, DisplayContainer, PageWrapper} from './browse-friends.styles';
import {StyledSpinner} from '../styled-spinner';


const BrowseFriends = ({history}) => {


  const {currentUser, friendsList} = useContext(UserContext);
  const [userArray, setUserArray] = useState([]);
  let userKey;


    useEffect(() => {
      async function fetchData() {
        const fetchedUserArray = await fetchUserArray();
        setUserArray(fetchedUserArray);
      }
      fetchData();
    }, [])

    if (localStorage.getItem("user") && !currentUser) {
      userKey = localStorage.getItem("user");
    }

    const handleClick = ({key}) => history.push(`/profile/${key}`);
    

    return <PageWrapper>
        <TabBanner>Browse Users</TabBanner>
        {!currentUser ?
          <StyledSpinner/> :
          <DisplayContainer>
            {friendsList && userArray.filter((item) => item.uid !== userKey && !friendsList.find((friend) => item.uid === friend.currentUser.uid)).map((user, idx) => <ProfileTab key={idx} user={user} handleClick={handleClick}/>)}
          </DisplayContainer>
        }
    </PageWrapper>
}

export default withRouter(BrowseFriends);