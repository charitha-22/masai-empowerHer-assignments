import React from 'react'
import UserInfo from './UserInfo';

const UserProfile = () => {
    const name = "Charitha"
    const age = "20";

  return (
    <div>
        <div>UserProfile</div>
        <UserInfo name={name} age={age} />
    </div>
  )
}

export default UserProfile