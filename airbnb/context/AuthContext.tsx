'use client';

import { createContext, useContext, useState, useEffect } from "react";
interface AuthContextType {
    userId: string | null;
    isAuthenticated: boolean;
    setUserId: (id: string | null) => void;
    handleLogout: () => Promise<void>; 
    handleLogin: (userId: string, accessToken: string, refreshToken: string) => Promise<void>;  
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUserId() {
            try {
                const response = await fetch("/api/auth/getUser");
                const data = await response.json();
                setUserId(data.userId);
            } catch (error) {
                console.error("Failed to fetch user ID", error);
            }
        }

        fetchUserId();
    }, []);

    const isAuthenticated = !!userId;

    async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, accessToken, refreshToken }),
        });
    
        if (response.ok) {
            setUserId(userId);
        } else {
            console.error("Login failed");
        }
    }
    
    async function handleLogout() {
        const response = await fetch("/api/auth/logout", { method: "POST" });
    
        if (response.ok) {
            setUserId(null);
        } else {
            console.error("Logout failed");
        }
    }

    return (
        <AuthContext.Provider value={{ userId, isAuthenticated, setUserId, handleLogin, handleLogout }} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const authcontext = useContext(AuthContext);
    if (!authcontext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authcontext;
}


