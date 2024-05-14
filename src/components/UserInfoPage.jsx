import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const UserInfoPage = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div>
      <h2>User Info Page</h2>
      {userInfo && (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Password: {userInfo.password}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
