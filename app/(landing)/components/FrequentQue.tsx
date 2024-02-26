import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const FrequentQue = () => (
  <div>
    <p className="text-center font-semibold text-3xl">
      Frequently asked questions
    </p>
    <p className=" text-lg max-w-3xl mx-auto text-gray-500 max-w text-center mt-9 text-balance">
      Have a different question and can’t find the answer you’re looking for?
      Reach out to our support team by sending us an email and we’ll get back to
      you as soon as we can.
    </p>
    <div className="mt-16 border-t">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-6 text-lg text-black/70">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-gray-500 pb-6 text-black/70">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-6 text-lg text-black/70">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="text-gray-500 pb-6">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="hover:no-underline!">
          <AccordionTrigger className="py-6 text-lg text-black/70">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="text-gray-500 pb-6">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export default FrequentQue;