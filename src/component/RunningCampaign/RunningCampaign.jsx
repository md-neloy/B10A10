import { useEffect, useState } from "react";
import Campign from "./campaign/Campign";
import { format } from "date-fns";

const RunningCampaign = () => {
  const [campaigns, setCampaign] = useState([]);
  const [loadCampings, setLoadCampaigns] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch(
        `https://b10-a10-server-tau.vercel.app/getcampaign`
      );
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
    <div id="runnigCampaign" className="mx-4 lg:mx-[100px] py-10">
      <h1 className="text-4xl text-center font-bold mb-4 text-yellow-500 ">
        Running Campaign
      </h1>
      {campaigns.length === 0 ? (
        <>
          <div className="w-fit mx-auto">
            <span className="loading loading-bars loading-md"></span>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => {
              return <Campign key={campaign._id} campaigns={campaign} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RunningCampaign;
