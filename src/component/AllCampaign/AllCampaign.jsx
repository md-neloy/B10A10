import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { Context } from "../../ContexApi/ContextProvider";

const AllCampaign = () => {
  const { user } = useContext(Context);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const result = await fetch(
        `https://b10-a10-server-tau.vercel.app/getcampaign`
      );
      const data = await result.json();
      setCampaigns(data);
    }
    getData();
  }, []);
  const handleSeeMore = (id) => {
    if (user && user.email) {
      navigate(`/detailsPage/${id}`);
    } else {
      document.getElementById("login_modal").showModal();
    }
  };
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
                      onClick={() => handleSeeMore(campaign._id)}
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
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl">
          <h3 className="font-bold text-2xl flex items-center justify-center gap-2">
            <FaSignInAlt className="text-3xl" />
            Login Required!
          </h3>
          <p className="py-4 text-center text-lg">
            You need to be logged in to access this feature. Please log in to
            continue.
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* Button to close the modal */}
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-500">
                Close
              </button>
            </form>
            {/* Button to navigate to the login page */}
            <a
              href="/login"
              className="btn btn-primary bg-white text-blue-500 border-none shadow-md hover:bg-blue-100"
            >
              <FaSignInAlt className="mr-2" />
              Login Now
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AllCampaign;
