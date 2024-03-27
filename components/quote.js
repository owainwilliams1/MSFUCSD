export default function Quote({ quote, citation }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-md text-justify leading-normal text-gray-500 lg:text-l xl:text-xl dark:text-gray-300">
        {quote}
      </p>
      <p className="self-end text-sm leading-normal text-gray-500 lg:text-md xl:text-l">
        {citation}
      </p>
    </div>
  );
}
