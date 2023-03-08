
import React from 'react';
import ProfileItem from '../Profile/ProfileItem';

const Profile = () => {
  return (
    <React.Fragment>
      <h4>Profile</h4>
      <ul>
        <ProfileItem name="sachin" course="Java" />
        <ProfileItem name="Isiwarani" course="C#" />
        <ProfileItem name="Kamal" course="C++" />
        <ProfileItem name="Nuwan" course="Angular" />
      </ul>
    </React.Fragment>
  );
};

export default Profile;





