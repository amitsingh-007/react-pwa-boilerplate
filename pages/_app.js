import "../styles/globals.css";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  pwaTrackingListeners();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
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
