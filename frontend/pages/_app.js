import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../lib/Providers";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
//import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </NextUIProvider>
  );
}
