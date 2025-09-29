import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";

export const PeydaFanum = localFont({
  src:[
    {
      path:"../../assets/Fonts/Peyda-Medium.ttf"
    }
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${PeydaFanum.className} min-h-screen relative bg-[#232323]`}
      >
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
