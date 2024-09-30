import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CheckPoint - Front-end Design Engineering",
  description: "CheckPoint - Front-end Design Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
