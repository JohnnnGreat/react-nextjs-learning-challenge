import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";

type faqType = {
   key: number;
   question: string;
   answer: string;
};
const faqs: faqType[] = [
   {
      key: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces. It was developed by Facebook and Instagram.",
   },
   {
      key: 2,
      question: "What is Vite?",
      answer: "Vite is a build tool that improves the development experience of modern web applications.",
   },
];
function App() {
   return (
      <>
         <Tabs defaultTab="overview">
            <Tabs.Item name="overview">Overview</Tabs.Item>
            <Tabs.Item name="payment">Payment</Tabs.Item>

            <Tabs.Content name="overview">
               <h1>Overview Section</h1>
            </Tabs.Content>
            <Tabs.Content name="payment">
               <h1>Payment Section</h1>
            </Tabs.Content>
         </Tabs>

         {/* Accordion */}
         <h1>Accordion Using Compound Component</h1>

         <Accordion>
            {faqs.map((faq: faqType) => (
               <Accordion.Item>
                  <Accordion.Header id={faq.key}>{faq.question}</Accordion.Header>
                  <Accordion.Description id={faq.key}>{faq.answer}</Accordion.Description>
               </Accordion.Item>
            ))}
         </Accordion>
      </>
   );
}

export default App;
