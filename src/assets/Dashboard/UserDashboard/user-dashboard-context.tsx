// UserDashboardContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserDashboardContextType = {
  selectedNavItem: string;
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const UserDashboardContext = createContext<UserDashboardContextType | undefined>(undefined);

type UserDashboardProviderProps = {
  children: ReactNode;
};

export const UserDashboardProvider: React.FC<UserDashboardProviderProps> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('posts');

  return (
    <UserDashboardContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </UserDashboardContext.Provider>
  );
};

export const useUserDashboard = () => {
  const context = useContext(UserDashboardContext);
  if (context === undefined) {
    throw new Error('useUserDashboard must be used within a UserDashboardProvider');
  }
  return context;
};
