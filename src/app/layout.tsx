"use client";

import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <div id="modal-id"></div>
      </body>
    </html>
  );
}
