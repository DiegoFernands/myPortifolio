import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import { Header } from '@/components/Header/header';
import Footer from "@/components/Footer/footer";

const poppins = Poppins({ subsets: ["latin"] , weight: ['100', '300', '400', '500','600', '700']});

export const metadata: Metadata = {
  title: "Dev | Diego Oliveira",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Header/>
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
