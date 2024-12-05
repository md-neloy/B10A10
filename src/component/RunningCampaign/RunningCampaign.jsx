import { useEffect, useState } from "react";
import Campign from "./campaign/Campign";
import { format } from "date-fns";

const RunningCampaign = () => {
  const [campaigns, setCampaign] = useState([]);
  const [loadCampings, setLoadCampaigns] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch(`http://localhost:5000/getcampaign`);
      const data = await result.json();
      setLoadCampaigns(data);
    }
    getData();
  }, []);

  const formatedDate = format(new Date(), "yyyy-MM-dd");
  useEffect(() => {
    const dayleftCampaign = loadCampings.filter((campaign) => {
      const today = new Date(formatedDate);
      const targetDate = new Date(campaign.deadline);
      const dayLeft = (targetDate - today) / (1000 * 60 * 60 * 24);
      if (dayLeft > 0) {
        return campaign;
      }
    });
    setCampaign(dayleftCampaign.slice(0, 6));
  }, [formatedDate, loadCampings]);

  return (
    <div className="mx-4 lg:mx-[100px] py-10">
      <h1>Running Campaign</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns?.map((campaign) => {
          return <Campign key={campaign._id} campaigns={campaign} />;
        })}
      </div>
    </div>
  );
};

export default RunningCampaign;
