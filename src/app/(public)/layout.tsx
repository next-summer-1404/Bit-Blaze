import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";

export const PeydaFanum = localFont({
  src:[
    {
      path:"../../assets/Fonts/Peyda-Medium.ttf",
      weight:"500"
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
        className={`${PeydaFanum.className} antialiased bg-[#232323] min-h-screen`}
      >
          <Header/>
          {children}
      </body>
    </html>
  );
}
