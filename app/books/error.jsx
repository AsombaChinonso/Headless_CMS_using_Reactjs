"use client";

function error({ error, reset }) {
  return (
    <div className=" flex h-screen max-w-7xl mx-auto">
      <div className=" flex flex-col mx-auto mt-48">
      <h2 className=" font-normal">Something went wrong!</h2>
      <button className="mt-2 hover:bg-red-600 bg-white  px-6 py-2 hover:text-white text-red-600 transition-all duration-300 font-semibold " onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}

export default error;
