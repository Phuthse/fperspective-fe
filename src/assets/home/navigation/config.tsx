import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';

export interface ButtonConfig {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const ButtonConfig: ButtonConfig[] = [
  {
    name: 'Home',
    path: '/home',
    icon: <HomeIcon/>, // You can replace with your actual icon component
  },
  {
    name: 'Explore',
    path: '/explore',
    icon: <MagnifyingGlassIcon/>, // Replace with your actual icon
  },
  {
    name: 'Saved',
    path: '/saved',
    icon: <BookmarkIcon/>
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserIcon/>, // Use the imported User icon component
  },
]
