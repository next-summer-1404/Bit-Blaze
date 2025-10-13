"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IAuthContextTypes {
    email: string;
    tempUserId: string;
    userId: string;
    resetCode: string;
    setEmail: (email: string) => void;
    setTempUserId: (tempUserId: string) => void;
    setUserId: (userId: string) => void;
    setResetCode: (resetCode: string) => void;
    
}

const AuthContext = createContext<IAuthContextTypes | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [email, setEmail] = useState<string>("");
  const [tempUserId, setTempUserId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [resetCode, setResetCode] = useState<string>("");
  return (
    <AuthContext.Provider value={{ email, tempUserId, userId, resetCode, setEmail, setTempUserId, setUserId, setResetCode }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
      if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}