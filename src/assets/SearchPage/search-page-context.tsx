import React, { createContext, useContext, useState, ReactNode } from 'react';

type SearchPageContextType = {
    selectedNavItem: string;
    setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
};

const SearchPageContext = createContext<SearchPageContextType | undefined>(undefined);

type SearchPageProviderProps = {
    children: ReactNode;
};

export const SearchPageProvider: React.FC<SearchPageProviderProps> = ({ children }) => {
    const [selectedNavItem, setSelectedNavItem] = useState<string>('post');

    return (
        <SearchPageContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
            {children}
        </SearchPageContext.Provider>
    );
};

export const useSearchPage = () => {
    const context = useContext(SearchPageContext);
    if (context === undefined) {
        throw new Error('SearchPage must be used within a SearchPageProvider');
    }
    return context;
};
