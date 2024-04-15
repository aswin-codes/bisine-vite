import React from "react";

const ProgressBar = ({ index }) => {
  return (
    <div className="flex bg-blue-100 min-h-10 px-5 pt-5 pb-9 items-center justify-center">
      <div className="flex flex-col items-center relative">
        <div
          className={`rounded-full ${
            index > 1 ? "bg-blue-300 border-2 border-blue-500 " : "bg-blue-500"
          } p-4 flex justify-center items-center h-5 w-5 text-white text-xs`}
        >
          {index > 1 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          ) : (
            <span>1</span>
          )}
        </div>
        <span
          className={`absolute -bottom-5 text-sm ${
            index != 1 ? "text-slate-400" : "font-semibold"
          }`}
        >
          Address
        </span>
      </div>
      <div
        className={`h-0.5 w-20 ${index > 1 ? "bg-blue-500" : "bg-slate-400"}`}
      ></div>
      <div className="flex flex-col items-center relative">
        <div
          className={`rounded-full ${
            index != 2 ? "bg-blue-300 border-2 border-blue-500 " : "bg-blue-500"
          } p-4 flex justify-center items-center h-5 w-5 text-white text-xs`}
        >
          {index > 2 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          ) : (
            <span>2</span>
          )}
        </div>
        <p
          className={`absolute -bottom-5 text-sm ${
            index != 2 ? "text-slate-400" : "font-semibold"
          }`}
        >
          Summary
        </p>
      </div>
      <div
        className={`h-0.5 w-20 ${index > 3 ? "bg-blue-500" : "bg-slate-400"}`}
      ></div>
      <div className="flex flex-col items-center relative">
        <div
          className={`rounded-full ${
            index != 3 ? "bg-blue-300 border-2 border-blue-500 " : "bg-blue-500"
          } p-4 flex justify-center items-center h-5 w-5 text-white text-xs`}
        >
          {index > 3 ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          ) : (
            <span>3</span>
          )}
        </div>
        <p
          className={`absolute -bottom-5 text-sm ${
            index != 3 ? "text-slate-400" : "font-semibold"
          }`}
        >
          Payment
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
