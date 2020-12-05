import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/actions/currentUser';

const Profile = () => {
  const user = useSelector(state => state.user);
  const { id } = useParams();
  const userId = Number.parseInt(id);

  let userProfile = false;
  useEffect(() => {
    getOneUser(userId);
  }, [userId]);

  if (user.id === userId) {
    userProfile = true
  }
  if (!user) {
    return null;
  }

  return (
    <div className="profile">
      <h1>Your Page</h1>
    </div>
  )
}

export default Profile;
