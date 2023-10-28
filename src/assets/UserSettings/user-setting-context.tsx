import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserSettingContextType = {
    selectedNavItem: string;
    setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const UserSettingContext = createContext<UserSettingContextType | undefined>(undefined);

type UserSettingProviderProps = {
    children: ReactNode;
};

export const UserSettingProvider: React.FC<UserSettingProviderProps> = ({ children }) => {
    const [selectedNavItem, setSelectedNavItem] = useState<string>('profile');

    return (
        <UserSettingContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
            {children}
        </UserSettingContext.Provider>
    );
};

export const useUserSetting = () => {
    const context = useContext(UserSettingContext);
    if (context === undefined) {
        throw new Error('UserSetting must be used within a UserSettingProvider');
    }
    return context;
};
