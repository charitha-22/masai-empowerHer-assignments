import React from 'react'

const UserInfo = ({name, age}) => {
  return (
    <>
        <div>UserInfo</div>
        <h3>{name}</h3>
        <h3>{age}</h3>
    </>
  )
}

export default UserInfo