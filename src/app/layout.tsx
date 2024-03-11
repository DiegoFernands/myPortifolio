import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import { Header } from '@/components/Header/header';
import Footer from "@/components/Footer/footer";
import Tape from "@/components/Tape/tape";

const poppins = Poppins({ subsets: ["latin"] , weight: ['100', '300', '400', '500','600', '700']});

export const metadata: Metadata = {
  title: "Diego Oliveira | Dev",
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
          <Tape/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
