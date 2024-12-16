import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";
import SideBar from "@/components/sidebar/SideBar";
import Provider from "@/config/Provider";
import { ReactQueryProvider } from "@/config/react-query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-full `}
      >
        <ReactQueryProvider>
          <Provider>
            <SideBar />

            {children}
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
