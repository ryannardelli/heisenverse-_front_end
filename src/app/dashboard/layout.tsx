import { SideBar } from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SideBar/>
      <body>{children}</body>
    </html>
  );
}
