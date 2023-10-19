// AdminDashboardContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserAnalyticContextType = {
    selectedNavItem: string;
    setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const UserAnalyticContext = createContext<UserAnalyticContextType | undefined>(undefined);

type UserAnalyticProviderProps = {
    children: ReactNode;
};

export const UserAnalyticProvider: React.FC<UserAnalyticProviderProps> = ({ children }) => {
    const [selectedNavItem, setSelectedNavItem] = useState<string>('posts');

    return (
        <UserAnalyticContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
            {children}
        </UserAnalyticContext.Provider>
    );
};

export const useUserAnalytic = () => {
    const context = useContext(UserAnalyticContext);
    if (context === undefined) {
        throw new Error('useUserAnalytic must be used within a UserAnalyticProvider!');
    }
    return context;
};
