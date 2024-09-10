import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C. Veiby",
  description: "Resume of Christian Veiby",
  icons: {
    icon: [
      {
        url: "/favicon_dark.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
