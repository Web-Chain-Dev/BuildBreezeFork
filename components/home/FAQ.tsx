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
    <div className="flex flex-col gap-12 h-screen items-center justify-center">
      <h3 className="text-purple-500 text-center text-6xl lg:text-7xl font-semibold flex-col gap-12">
        Frequently Ask Questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-[90vw] md:w-full bg-cover bg-center text-xl p-12 rounded-xl max-w-2xl"
        style={{ backgroundImage: "url(assets//bluepurple8.jpg)" }}
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
