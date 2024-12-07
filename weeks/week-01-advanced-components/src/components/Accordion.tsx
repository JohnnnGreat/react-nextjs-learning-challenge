import { createContext, ReactNode, useContext, useState } from "react";

type AccordionType = {
   activeIndex: number;
   setActiveIndex: (index: number) => void;
};

const AccordionContext = createContext<AccordionType | null>(null);

const useAccordionContext = () => {
   const context = useContext(AccordionContext);

   if (!context) {
      throw new Error("useAccordionContext must be used within an AccordionProvider");
   }

   return context;
};
const Accordion = ({ children }: { children: any }) => {
   const indexValue = parseInt(localStorage.getItem("index") ?? "");
   const [activeIndex, setActiveIndex] = useState<number>(indexValue);
   return <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</AccordionContext.Provider>;
};

Accordion.Item = ({ children }: { children: ReactNode }) => {
   return <div>{children}</div>;
};

Accordion.Header = ({ id, children }: { id: number; children: ReactNode }) => {
   const { setActiveIndex } = useAccordionContext();

   return (
      <button
         onClick={() => {
            setActiveIndex(id);

            console.log(id);
            // Update Persisting local storage
            localStorage.setItem("index", `${id}`);
         }}
         className="tab"
      >
         {children}
      </button>
   );
};

Accordion.Description = ({ id, children }: { id: number; children: ReactNode }) => {
   const { activeIndex } = useAccordionContext();
   const isActive = id === activeIndex;

   console.log(isActive);

   return <div className={`desc ${isActive ? "ac-active" : "ac-close"}`}>{children}</div>;
};

export default Accordion;
