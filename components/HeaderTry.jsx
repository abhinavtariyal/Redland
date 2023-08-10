import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  const router = useRouter();
  const data = [
    {
      label: "Home",
      value: "home",
      link: "/",
    },
    {
      label: "Services",
      value: "services",
      link: "/services",
    },
    {
      label: "About",
      value: "about",
      link: "/about",
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-blue-gray-900 flex-1 gap-[4vw] p-4 justify-between"
        indicatorProps={{
          className:
            "bg-transparent border-b-4 border-[#c20000] rounded-none",
        }}
      >
        {data.map(({ label, value, link }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => {
              router.push(`${link}`);
              setActiveTab(value);
            }}
            className={activeTab === value ? "font-bold text-white" : "text-white"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
