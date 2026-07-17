import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Jeus D. Bausa — Software Engineer",
  description:
    "Portfolio of Jeus Bausa — Software Engineer. Projects, experience, and contact.",
};

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="container-max">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
