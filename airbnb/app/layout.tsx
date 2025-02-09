import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { LoginModel } from "@/components/Models/LoginModel";
import { SignUpModel } from "@/components/Models/SignUpModel";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { cookies } from "next/headers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Airbnb",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {    

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
            > 
                <AuthProvider>
                    <Navbar />
                    <div>
                        {children}
                    </div>
                    <LoginModel/>
                    <SignUpModel/>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
