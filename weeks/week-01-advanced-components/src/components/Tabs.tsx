import React, { createContext, FC, ReactNode, useContext, useState } from "react";

type TabContextType = {
   activeIndex: string;
   setActiveIndex: (tab: string) => void;
};
const TabContext = createContext<TabContextType | null>(null);

const Tabs = ({ defaultTab, children }: { defaultTab: string; children: ReactNode }) => {
   const [activeIndex, setActiveIndex] = useState<string>(defaultTab ? defaultTab : "");

   return <TabContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</TabContext.Provider>;
};

const useTabIndex = () => {
   const context = useContext(TabContext);

   if (!context) throw new Error("useTabIndex must be used inside of a tab");

   return context;
};

Tabs.Item = ({ name, children }: { name: string; children: ReactNode }) => {
   const context = useTabIndex();

   const isActive = context.activeIndex === name;
   return (
      <button
         name={name}
         className={`${isActive ? "active" : ""}`}
         onClick={() => {
            context.setActiveIndex(name);
         }}
      >
         {children}
      </button>
   );
};

Tabs.Content = ({ name, children }: { name: string; children: ReactNode | string }) => {
   const context = useTabIndex();

   const isActive = context.activeIndex === name;
   return <div>{isActive ? children : null}</div>;
};

export default Tabs;
