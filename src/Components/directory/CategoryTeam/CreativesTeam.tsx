import React from "react";
import CategoryTeam from "./CategoryTeam";
import { CreativesTeamProfile } from "../CategoryTeam/CreatuivesTeamImg";

const CreativesTeam = () => {
  return (
    <div className="grid grid-cols-4 text-center gap-11 ">
      {CreativesTeamProfile.map((category: any) => (
        <CategoryTeam key={category.id} ourTeam={category} />
      ))}
    </div>
  );
};

export default CreativesTeam;
