import { useEffect, useState } from "react";
import Campign from "./campaign/Campign";

const RunningCampaign = () => {
  const [campaigns, setCampaign] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch(`http://localhost:5000/getcampaign`);
      const data = await result.json();
      setCampaign(data?.slice(0, 6));
    }
    getData();
  }, []);

  return (
    <div className="mx-4 lg:mx-[100px]">
      <h1>Running Campaign</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns?.map((campaign) => (
          <Campign key={campaign._id} campaigns={campaign} />
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
