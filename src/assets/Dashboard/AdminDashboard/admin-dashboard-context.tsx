// AdminDashboardContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AdminDashboardContextType = {
    selectedNavItem: string;
    setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const AdminDashboardContext = createContext<AdminDashboardContextType | undefined>(undefined);

type AdminDashboardProviderProps = {
    children: ReactNode;
};

export const AdminDashboardProvider: React.FC<AdminDashboardProviderProps> = ({ children }) => {
    const [selectedNavItem, setSelectedNavItem] = useState<string>('posts');

    return (
        <AdminDashboardContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
            {children}
        </AdminDashboardContext.Provider>
    );
};

export const useAdminDashboard = () => {
    const context = useContext(AdminDashboardContext);
    if (context === undefined) {
        throw new Error('useAdminDashboard must be used within a AdminDashboardProvider');
    }
    return context;
};
