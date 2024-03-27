import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-msfRed`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What events do you hold?",
    answer:
      "We hold advocacy campaigns, screen films, hold fundraising efforts, teach life saving skills used by MSF doctors abroad, collaberate with other organizations, and hold seminars from mentors and MSF volunteers.",
  },
  {
    question: "Do I have to be on a pre-med track to join?",
    answer:
      "Absolutely not! There are no required qualifications to join. Our club draws in talent from all majors; all contributing to different aspects of the same noble cause.",
  },
  {
    question: "What actually is Doctors Without Borders?",
    answer:
      "Doctors Without Borders is a non profit, non-governmental organization which has created a medical movement of more than 30,000 doctors, nurses, logisticians and administrators which aims to treat patents in some of the most remote and dangerous places in the world. Doctors Without Borders has medical teams in over 70 countries, saving the lives of those threatened by violence, disease, malnutrition, exclusion from healthcare, and catastrophic events every single day. They also fight for better care and access to affordable vaccines and drugs.",
  },
];

export default Faq;
