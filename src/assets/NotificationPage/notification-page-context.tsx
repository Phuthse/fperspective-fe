import React, { createContext, useContext, useState, ReactNode } from 'react';

type NotificationPageContextType = {
    selectedNavItem: string;
    setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const NotificationPageContext = createContext<NotificationPageContextType | undefined>(undefined);

type NotificationPageProviderProps = {
    children: ReactNode;
};

export const NotificationPageProvider: React.FC<NotificationPageProviderProps> = ({ children }) => {
    const [selectedNavItem, setSelectedNavItem] = useState<string>('all');

    return (
        <NotificationPageContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
            {children}
        </NotificationPageContext.Provider>
    );
};

export const useNotificationPage = () => {
    const context = useContext(NotificationPageContext);
    if (context === undefined) {
        throw new Error('NotificationPage must be used within a NotificationPageProvider');
    }
    return context;
};
