"use client";

import { Card, CardBody, Link, Tab, Tabs } from "@nextui-org/react";

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

const AffiliateFooter = () => (
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

export default AffiliateFooter;
