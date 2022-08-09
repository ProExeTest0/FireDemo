import React from 'react';
import Feedpost from './Homescreen/Feedpost';
import Notification from './Heartscreen/Notification';
import Reels from './Reels/Reels';
import ProfileView from './Setting/Profile';
import Searchreels from './Searchscren/Searchreels';

export const Feed = () => {
  return <Feedpost />;
};

export const NotificationOnheart = () => {
  return <Notification />;
};

export const ReelsOnBottom = () => {
  return <Reels />;
};

export const ProfileOnBottom = () => {
  return <ProfileView />;
};
export const ReelsInsearch = () => {
  return <Searchreels />;
};
