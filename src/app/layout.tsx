import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GS Blue Corporation",
  description: "Somos uma empresa que atua no mercado financeiro, levando aos nossos parceiros e cotistas a oportunidade de diversificar capital e alavancar suas operações com nossas cotas de investimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
