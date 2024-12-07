import React, { createContext, ReactNode, useContext, useState } from "react";

type DropdownType = {
   isActive: boolean;
   setIsActive: (isActive: boolean) => void;
};

const DropdownContext = createContext<DropdownType | null>(null);

// Getting the current state of the dropdown using the context API

// Dropdown Wrapping Component
const Dropdown = ({ children }: { children: ReactNode }) => {
   const [isActive, setIsActive] = useState<boolean>(false);
   return (
      <DropdownContext.Provider value={{ isActive, setIsActive }}>
         <div>{children}</div>
      </DropdownContext.Provider>
   );
};

const useActiveDropdownState = () => {
   const context = useContext(DropdownContext);

   if (!context) {
      throw new Error("useActiveDropdownState must be used within a Dropdown component");
   }

   return context;
};

const Trigger = ({ children }: { children: ReactNode }) => {
   const { isActive, setIsActive } = useActiveDropdownState();

   return (
      <button
         className="dropdown-trigger"
         onClick={() => {
            setIsActive(!isActive);
         }}
      >
         {children}
      </button>
   );
};

const Menu = ({ children }: { children: ReactNode }) => {
   const { isActive } = useActiveDropdownState();

   return <div className={`dropdown-menu ${isActive ? "dropdown-active" : ""}`}>{children}</div>;
};

const Item = ({ children }: { children: ReactNode }) => {
   return (
      <div className="dropdown-item">
         <button>{children}</button>
      </div>
   );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
