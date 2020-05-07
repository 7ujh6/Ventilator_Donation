import React, {useState, useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import ProfileTab from '../../components/profile-tab/profile-tab.component';
import CustomButton from '../custom-button/custom-button.component';
import {UserContext} from '../../providers/user/user.provider';
import {fetchUserArray} from '../../firebase/firebase.utils';
import {BrowseFriendsContainer, TabBanner, DisplayContainer} from './browse-friends.styles';

const BrowseFriends = ({history}) => {

  const {currentUser : {uid}, friendsList} = useContext(UserContext);

  const [userArray, setUserArray] = useState([]);


    useEffect(() => {
      async function fetchData() {
        const fetchedUserArray = await fetchUserArray();
        setUserArray(fetchedUserArray);
      }
      fetchData();
    }, [])

    const handleClick = event => {
      const {id} = event.target;
      history.push(`/profile/${userArray[id].uid}`);
    }
   
    return <BrowseFriendsContainer>
        <TabBanner>Browse Users</TabBanner>
        {userArray.filter((item) => item.uid !== uid && !friendsList.find((friend) => item.uid === friend.currentUser.uid)).map((user, idx) => <DisplayContainer key={idx}><ProfileTab user={user}/><CustomButton id={idx} onClick={handleClick} isProfileStyles>View Profile</CustomButton></DisplayContainer>)}
    </BrowseFriendsContainer>
}

export default withRouter(BrowseFriends);