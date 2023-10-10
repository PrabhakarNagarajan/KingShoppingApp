import React from "react";
import CategoryTeam from "./CategoryTeam";
import { MarketingTeamProfile } from "./MarketingTeamImg";

const MarketingTeam = () => {
  return (
    <div>
      {MarketingTeamProfile.map((category) => (
        <CategoryTeam key={category.id} ourTeam={category} />
      ))}
    </div>
  );
};

export default MarketingTeam;
