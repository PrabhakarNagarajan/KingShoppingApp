import React from "react";
import CategoryTeam from "./CategoryTeam";
import { productTeamProfile } from "../CategoryTeam/DevelopmentTeamImg";

const DevelopmentTeam = () => {
  return (
    <div className="grid grid-cols-4 text-center gap-11 ">
      {productTeamProfile.map((category) => (
        <CategoryTeam key={category.id} ourTeam={category} />
      ))}
    </div>
  );
};

export default DevelopmentTeam;
