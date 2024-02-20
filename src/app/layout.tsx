import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import { Header } from '@/components/header';

const poppins = Poppins({ subsets: ["latin"] , weight: ['100', '300', '400', '500', '700']});

export const metadata: Metadata = {
  title: "Dev | Diego Oliveira",
  description: "Portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Header/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
