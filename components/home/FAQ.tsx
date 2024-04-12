import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQquestions } from "@/constants";

const FAQ = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center gap-12 h-screen items-center justify-center"
      id="faq"
      style={{ backgroundImage: `url(/assets/bluepurple19.jpg)` }}
    >
      <h3 className="text-purple-500 text-center text-5xl md:text-6xl lg:text-7xl font-semibold ">
        Frequently Asked Questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-[80vw] md:w-full bg-cover bg-center text-xl p-12 py-12 rounded-xl max-w-2xl"
        style={{ backgroundImage: "url(assets//bluepurple9.jpg)" }}
      >
        {FAQquestions.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-white">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
