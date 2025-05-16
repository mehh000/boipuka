import React from 'react';
import { MdFlashOn, MdSupportAgent } from "react-icons/md";
import { AiFillLike, AiFillSafetyCertificate } from "react-icons/ai";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const services = [
  {
    icon: <MdFlashOn size={30} className="text-violet-700" />,
    title: "Fast Service",
    description: "Get lightning-fast response and delivery across all our platforms.",
    value: 'item-1'
  },
  {
    icon: <AiFillLike size={30} className="text-violet-700" />,
    title: "Trusted",
    description: "Thousands of users trust us for reliable and quality service.",
    value: 'item-2'

  },
  {
    icon: <AiFillSafetyCertificate size={30} className="text-violet-700" />,
    title: "Verified",
    description: "We ensure safety and verification in all our processes.",
    value: 'item-3'

  },
  {
    icon: <MdSupportAgent size={30} className="text-violet-700" />,
    title: "24/7 Support",
    description: "Always available to help you, anytime, anywhere.",
    value: 'item-4'

  },
];

function Services() {
  return (
    <>
      <div className="bg-gray-50 lg:block hidden w-full px-4 md:px-12 lg:px-36 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-xl p-6  transition duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center mb-4 h-12 w-12 bg-violet-200 rounded-md">
                {service.icon}
              </div>
              <h2 className="text-lg font-semibold text-violet-800 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden block ">
        <Accordion type="single" collapsible className="px-4 bg-gray-50">
          {
            services.map((faq, i) => (
              <AccordionItem key={i} value={faq.value}>
                <AccordionTrigger>
                  <div className="flex flex-row gap-1 items-center">
                    <div className="flex items-center justify-center h-5 w-5 bg-violet-200 rounded-md">
                      {faq.icon}
                    </div>
                    {faq.title}
                  </div>


                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))
          }

        </Accordion>
      </div>
    </>
  );
}

export default Services;
