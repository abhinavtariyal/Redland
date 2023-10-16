import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "@/store";

export function UnderlineTabs() {
  const dispatch = useDispatch();
  const activeTab1 = useSelector((state) => state.activeTab);
//   const [activeTab, setActiveTab] = React.useState("html");
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
      label: "About Us",
      value: "about",
      link: "/about",
    },
  ];
  return (
    <Tabs value={activeTab1}>
      <TabsHeader
        className="rounded-none bg-transparent flex-1 gap-[4vw] p-4 justify-between"
        indicatorProps={{
          className: "border-t-4 bg-transparent border-[#c20000] rounded-none shadow-none",
        }}
      >
        {data.map(({ label, value, link }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => {
              router.push(`${link}`);
              dispatch(reviewActions.setActiveTab(value));
            }}
            className={
              activeTab1 === value ? "font-bold text-[#2B2B2B]" : "text-black"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
