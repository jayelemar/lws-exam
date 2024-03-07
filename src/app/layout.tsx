import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster"


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IWS-Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Toaster/>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
