import { useContext, useEffect, useState } from "react";
import { Context } from "../../ContexApi/ContextProvider";
import MyDonationDetails from "../MyDonationDetails/MyDonationDetails";

const MyDonation = () => {
  const { user } = useContext(Context);
  const [donationCampaign, setDonationCampaign] = useState([]);
  useEffect(() => {
    fetch(
      `https://b10-a10-server-tau.vercel.app/donation/campaign/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDonationCampaign(data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  console.log(donationCampaign);
  return (
    <div className="mx-4 lg:mx-[100px] py-4">
      <h2 className="text-4xl font-bold text-center py-3">
        My Donation Campaign
      </h2>
      {donationCampaign.length === 0 ? (
        <>
          <div className="w-fit mx-auto">
            <span className="loading loading-bars loading-md"></span>
          </div>
        </>
      ) : (
        <>
          {donationCampaign.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {donationCampaign.map((campaign, idx) => (
                  <MyDonationDetails key={idx} campaigns={campaign} />
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-3xl font-semibold text-center my-10">
                You Didn&apos;t donate any campaing yet!
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyDonation;
