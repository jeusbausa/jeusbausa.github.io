"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProviderWrapper as ThemeProvider };
