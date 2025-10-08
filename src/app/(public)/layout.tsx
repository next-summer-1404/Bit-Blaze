import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";

export const PeydaFanum = localFont({
  src:[
    {
      path:"../../assets/Fonts/IRANSansXFaNum-Medium.ttf"
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
          <Header/>
          {children}
      </body>
    </html>
  );
}



