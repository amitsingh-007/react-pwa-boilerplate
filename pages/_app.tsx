import "../styles/globals.css";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";
import { NextUIProvider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

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
      <main
        className={`h-screen dark text-foreground bg-background ${inter.variable} font-sans`}
      >
        <div className="container mx-auto h-full">
          <Component {...pageProps} />
        </div>
      </main>
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
