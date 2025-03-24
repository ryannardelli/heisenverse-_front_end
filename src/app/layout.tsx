"use client";
import { Header } from "./components/Header";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  // rotas onde não irá ser mostrado o Header
  const noHeaderRoutes = ["/dashboard", "/feed"];

  const showHeader = !noHeaderRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
