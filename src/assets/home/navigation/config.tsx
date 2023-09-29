import { HomeIcon } from '@heroicons/react/24/solid';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';

const items = [
  {
    title: 'Home',
    path: '/home-page/home',
    icon: <HomeIcon />
  },
  {
    title: 'Discover',
    path: '/',
    icon: <MagnifyingGlassIcon />
  },
  {
    title: 'Share',
    path: '/',
    icon: <BookmarkIcon />
    
  },
  {
    title: 'Profile',
    path: '/',
    icon: <UserIcon />
  },
];

export default items;
