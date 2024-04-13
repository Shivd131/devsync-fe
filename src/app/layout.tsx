import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login to DevSync",
  description: "Experience seamless remote CLI access with enhanced security measures including 2FA and selective folder access. Collaborate efficiently with multi-user support, custom command templates, and comprehensive command/file history on our platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
