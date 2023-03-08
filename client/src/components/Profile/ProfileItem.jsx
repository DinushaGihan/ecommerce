import React from 'react'

const ProfileItem = (props) => {
  return (
    <li>{props.name} - course - {props.course}</li>
  );
};

export default ProfileItem;