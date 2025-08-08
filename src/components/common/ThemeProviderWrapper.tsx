"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProviderWrapperProps {
    children: React.ReactNode;
}

export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
