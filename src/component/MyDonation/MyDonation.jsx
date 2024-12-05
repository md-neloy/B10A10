import { useContext, useEffect, useState } from "react";
import Campign from "../RunningCampaign/campaign/Campign";
import { Context } from "../../ContexApi/ContextProvider";

const MyDonation = () => {
  const { user } = useContext(Context);
  const [donationCampaign, setDonationCampaign] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/donation/campaign/${user.email}`)
      .then((res) => res.json())
      .then((data) => setDonationCampaign(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(donationCampaign);
  return (
    <div className="mx-4 lg:mx-[100px] py-4">
      <h2 className="text-4xl font-bold text-center py-3">
        My Donation Campaign
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {donationCampaign.map((campaign, idx) => (
          <Campign key={idx} campaigns={campaign} />
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
