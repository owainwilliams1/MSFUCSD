import Image from "next/image";
import Container from "./container";
import { Button } from "./moving-border";
import Quote from "./quote";
import logo512 from "../public/img/logo.svg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 flex-wrap">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Doctors Without Borders at UC San Diego
            </h1>
            <div className="pt-2 pb-4">
              <Quote
                quote={`"Practicing medical humanitarian action is about helping
                strangers; people you have never met and may never see again. It
                is an act of protest against the suffering of others"`}
                citation={"Jason Cone, Executive Director of MSF-USA."}
              />
            </div>

            <div className="flex flex-row justify-between lg:justify-normal items-start w-full gap-2">
              <Button className="bg-white dark:bg-trueGray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-md">
                <a
                  href="mailto:msfchapter@ucsd.edu"
                  target="_blank"
                  rel="noopener"
                >
                  Join Now!
                </a>
              </Button>
              <button className="border-neutral-200 dark:border-slate-800 border rounded-md h-16 w-40 p-[1px] text-sm antialiased">
                <a
                  href="https://donate.doctorswithoutborders.org/secure/give-monthly-double-your-impact-search-onetime-reverse?ms=ADD2308U0U52&utm_source=google&utm_medium=cpc&utm_campaign=BRAND.DWB_CKMSF-BRAND.DWB-GS-STLK-ALL-VAR-BO-ALL-STLK-DONATETEST-MONTHLY&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx5muKYg4qDk0atK44PpqMEkxW-THac4QnYrOAeTn6o1Y5-50o-MTYRoCcGQQAvD_BwE"
                  target="_blank"
                >
                  Donate
                </a>
              </button>
              <button className="border-neutral-200 dark:border-slate-800 border rounded-md h-16 w-40 p-[1px] text-sm antialiased">
                <a href="https://discord.gg/dXFgxG4G" target="_blank">
                  Discord
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-center w-full lg:w-1/2 lg:flex">
          <div className="flex items-center justify-center w-full">
            <Image
              src={logo512}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
