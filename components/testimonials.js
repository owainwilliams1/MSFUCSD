import Image from "next/image";
import React from "react";
import Container from "./container";

import danielle from "../public/img/danielle.jpeg";
import taylor from "../public/img/taylor.jpeg";
import shannon from "../public/img/shannon.jpeg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I was very interested in global health and the <Mark>values</Mark>{" "}
              of MSF, so I joined the Doctors Without Borders chapter at UC San
              Diego!
            </p>
            <Avatar
              image={danielle}
              name="Danielle Betts"
              title="Outreach Committee"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              We are guided by our universal medical ethics. We are
              <Mark>committed</Mark> to bearing witness.
            </p>
            <Avatar
              image={taylor}
              name="Taylor Phillips"
              title="Event Committee"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              MSF provides education and raises awareness on global issues. I
              can make a meaningful impact locally while spreading a
              <Mark>global</Mark>
              perspective.
            </p>

            <Avatar
              image={shannon}
              name="Shannon Talley"
              title="Volunteer Committee"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-white bg-msfRed rounded-md ring-msfRed ring-4">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
