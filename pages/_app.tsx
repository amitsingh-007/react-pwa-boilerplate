import "../styles/globals.css";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";
import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import AppNavBar from "../src/components/AppNavBar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
});

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  pwaTrackingListeners();
}

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main
          className={`flex flex-col h-screen text-foreground bg-background ${inter.variable} font-sans`}
        >
          <AppNavBar />
          <div className="container mx-auto flex-1">
            <Component {...pageProps} />
          </div>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

if (isBrowser && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered");
      })
      .catch((err) => {
        console.log("Service worker registration failed", err);
      });
  });
}

export default MyApp;
