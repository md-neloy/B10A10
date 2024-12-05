import { useEffect, useState } from "react";

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch(`http://localhost:5000/getcampaign`);
      const data = await result.json();
      setCampaigns(data);
    }
    getData();
  }, []);
  const handleSeeMore = () => {};
  const handleSort = () => {
    const sortedData = [...campaigns].sort(
      (a, b) => a.minDonation - b.minDonation
    );
    setCampaigns(sortedData);
    console.log(campaigns);
  };
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Campaigns</h1>
        <div className="flex justify-end ">
          <button className="btn btn-primary my-2" onClick={handleSort}>
            sort
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Organizer</th>
                <th className="py-3 px-4 text-left">Minimum Donation</th>
                <th className="py-3 px-4 text-left">Dead Line</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={campaign._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{campaign?.title}</td>
                  <td className="py-3 px-4">{campaign?.userName}</td>
                  <td className="py-3 px-4">{campaign?.minDonation}</td>
                  <td className="py-3 px-4">{campaign?.deadline}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleSeeMore(campaign.id)}
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {campaigns.length === 0 && (
            <p className="text-center mt-4 text-gray-500">
              No campaigns found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
