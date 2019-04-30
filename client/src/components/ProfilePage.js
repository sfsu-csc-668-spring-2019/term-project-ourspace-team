import React, {Component} from 'react';
import NavBar from './LoggedInTopBar';
import UserFeed  from './ProfilePage_Components/UserFeed'

class ProfilePage extends Component {
    render() {
        return(
            <div>
               <NavBar />
               <UserFeed />
            </div>
            
        );
    }
}

export default ProfilePage;