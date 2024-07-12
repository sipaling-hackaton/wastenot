import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from 'next/navigation';
import { Navbar } from "@/components/ui/navbar";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Wastenot",
  description: "An app for helping identify waste from images.",
};

export default function RootLayout({
                                     children,
                                   }:
                                       Readonly<{
                                         children: React.ReactNode;
                                       }>) {

  return (
      <html lang="en">
      <body
          // className={inter.className}
          className={cn(
              "h-screen w-screen bg-white",
          )}
      >
      {children}
      {/* <section
          className={"flex flex-row justify-center w-full p-4 gap-4"}
      >
        <Link
            href={"/"}
        >
          Home
        </Link>
        <Link
            href={"/nearby"}
        >
          Nearby
        </Link>
        <Link
            href={"/cart"}
        >
          Cart
        </Link>
      </section> */}
      <Navbar routes={[{path: "/", name: "Home"},
        {path: "nearby", name: "Nearby"}, 
        {path: "nearby/detail", name: "NearbyDetail"}, 
        {path: "shop", name: "Shop"},
        {path: "shop/detail", name: "ShopDetail"}]} />
      
      </body>
      </html>
  );
}
