import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <img
        className="w-full h-[450px] object-cover"
        src={data.Poster}
        alt={`poster ${data.Title}`}
      />
      <p className="pt-2 text-[12px] text-[#9CA3AF] uppercase font-bold">
        Tahun {data.Year}
      </p>
      <h4 className="font-bold text-[18px] pt-1 text-[#111827]">
        {data.Title}
      </h4>
      <div className="absolute top-5 left-4">
        <span className="bg-white/90 backdrop-blur-sm rounded-md px-4 py-1.5 capitalize">
          {data.Type}
        </span>
      </div>
      <div className="absolute top-3 right-3">
        <div className="bg-white/40 backdrop-blur-md rounded-full py-1.5 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Card;