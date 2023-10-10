import React from "react";

const CategoryTeam = ({ ourTeam }: any) => {
  const { title, imgUrl } = ourTeam;
  return (
    <div className="flex flex-col gap-5">
      <img src={imgUrl} className="flex w-64" />
      <h2 className="text-gray-900 text-2xl font-roboto font-light leading-8 break-words">
        {title}
      </h2>
    </div>
  );
};

export default CategoryTeam;
