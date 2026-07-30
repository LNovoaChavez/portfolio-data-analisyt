import { Poppins } from "next/font/google";
import "./globals.css";

// Configuramos Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"], // Los mismos que tenías en tu CSS
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}