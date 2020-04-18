import React, {useContext} from 'react';
import {ProfileDropdownContainer} from './profile-dropdown.styles';
import {UserContext} from '../../providers/user/user.provider';
import {ProfileDisplayContext} from '../../providers/profile-display/profile-display.provider';
import {fetchReferenceObject} from '../../firebase/firebase.utils';
 

class ProfileDropdown extends React.Component {

    constructor () {
        super();

        var {friendsList} = useContext(UserContext);
        var activeFriendsSet = new Set();

        this.state = {
            activeFriends: []
        }    
    }

    //I'm pretty sure this is wrong somehow but I have yet to find out 
    componentDidMount() {
        var {friendsList, activeFriendsSet} = this;
        const {activeFriends} = this.state;

       this.friendsList.forEach(async friend => await fetchReferenceObject(friend).child('activityStatus').onSnapshot(() => {
           if (!activeFriendsSet.has(friend)) {
                activeFriendsSet.add(friend);
                this.setState({activeFriends: [...activeFriends, friend]});
                } else {
                activeFriendsSet.delete(friend);
                this.setState({activeFriends: activeFriends.filter(inactiveFriend => friend === inactiveFriend)})
            }
        }))
    }   

    render() {

        //render the friendsList in the profile dropdown. 
        return <ProfileDropdownContainer>

        </ProfileDropdownContainer>
    }
}

export default ProfileDropdown;