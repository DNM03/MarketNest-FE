import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/ui/header";
import { ReactLenis } from "@/utils/lenis";
import Footer from "@/components/ui/footer";
import { AuthProvider } from "@/contexts/auth-context";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MarketNest",
  description: "Your best e-commerce platform",
  verification: {
    google: "-swTdwnJnJrhFnCkZUlCgjAaunmhnw9bnb7P8yY_F1Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <ReactLenis root>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </ReactLenis>
      </AuthProvider>
    </html>
  );
}
