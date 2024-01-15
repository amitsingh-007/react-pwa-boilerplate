import { Card, CardBody, Link, Tab, Tabs } from "@nextui-org/react";
import Head from "next/head";

const affliliateContent = [
  {
    title: "Medium Article",
    content: (
      <div>
        To learn about how to show PWA install banner for your website,
        <Link
          href="https://suncommander.medium.com/how-to-show-pwa-install-banner-add-to-homescreen-for-your-website-b1fbe6ebfdb5"
          title="Medium article on PWA install banner prompt"
          isExternal
          showAnchorIcon
          className="mx-1"
        >
          head to
        </Link>
        my article on Medium.
      </div>
    ),
  },
  {
    title: "Github",
    content: (
      <div>
        <Link
          href="https://github.com/amitsingh-007/react-pwa-boilerplate"
          title="Github Repository"
          isExternal
          showAnchorIcon
          className="mr-1"
        >
          Click here
        </Link>
        for complete source code of this application on Github.
      </div>
    ),
  },
];

const Affiliation = () => (
  <div className="flex md:w-2/4 flex-col flex-1">
    <Tabs
      aria-label="Options"
      color="success"
      className="flex w-full justify-center"
    >
      {affliliateContent.map(({ title, content }) => (
        <Tab key={title} title={title}>
          <Card>
            <CardBody>{content}</CardBody>
          </Card>
        </Tab>
      ))}
    </Tabs>
  </div>
);

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
        <div className="flex flex-col text-center gap-2 mt-[50%] md:mt-[20%]">
          <h1 className="text-4xl md:text-6xl font-bold">
            React PWA Boilerplate
          </h1>
          <p className="text-l md:text-2xl">
            Install this web application when prompted to test PWA
            installability.
          </p>
        </div>
        <Affiliation />
      </div>
    </>
  );
}
