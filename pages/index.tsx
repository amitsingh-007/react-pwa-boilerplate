import Head from "next/head";
import AffiliateFooter from "../src/components/AffiliateFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>React PWA Boilerplate</title>
        <meta
          name="description"
          content="A PWA boilerplate/reference application in React"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex h-full flex-col items-center justify-center gap-40">
        <div className="flex flex-col text-center gap-2 mt-[45%] md:mt-[15%]">
          <h1 className="text-4xl md:text-6xl font-bold">
            React PWA Boilerplate
          </h1>
          <p className="text-l md:text-2xl">
            Install this web application when prompted to test PWA
            installability.
          </p>
        </div>
        <AffiliateFooter />
      </div>
    </>
  );
}
