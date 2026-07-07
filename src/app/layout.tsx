import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Fahim Hossain | Full-Stack Developer",
  description: "Personal portfolio showcasing full-stack development, IoT, and real-time systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
