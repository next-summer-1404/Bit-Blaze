"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IHouseContextTypes {
    location: {
        lat:  string;
        lng: string;
    };
    setLocation: (location: { lat: string; lng: string }) => void;
}

const HouseContext = createContext<IHouseContextTypes | undefined>(undefined);

export const HouseProvider = ({children}: {children: ReactNode}) => {
    const [location, setLocation] = useState({ lat: "", lng: "" });

    return (
        <HouseContext.Provider value={{ location, setLocation }}>
            {children}
        </HouseContext.Provider>
    );
};

export const useHouse = () => {
    const context = useContext(HouseContext);
    if (!context) throw new Error('useHouse must be used within HouseProvider');
    return context;
};