import {
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";

const benefitOne = {
  title: "Why join us?",
  desc: "Joining Doctors Without Borders comes with great benefits, not only for medial students, but for everyone at UCSD.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Fulfilment",
      desc: "Joining a just cause such as MSF helps you utilize your position to help others in need.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Resume",
      desc: "Joining forces with an elite force such as MSF is an awesome item to add to your resume.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Teamwork",
      desc: "Joining MSF chapter at UCSD will help you connect with like-minded individuals.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export { benefitOne };
