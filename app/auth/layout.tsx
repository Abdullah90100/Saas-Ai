"use client";

import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import React from 'react';
function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <ClerkLoading>
                <p>loading ......</p>
            </ClerkLoading>
            <ClerkLoaded>
                <div className="flex items-center justify-center h-full">
                    {children}
                </div>
            </ClerkLoaded>

        </ClerkProvider>

    );
}

export default AuthLayout;
