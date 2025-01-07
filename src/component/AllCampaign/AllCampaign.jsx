import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
// import { Context } from "../../ContexApi/ContextProvider";
import Campign from "../RunningCampaign/campaign/Campign";

const AllCampaign = () => {
  // const { user } = useContext(Context);
  const [campaigns, setCampaigns] = useState([]);
  console.log(campaigns);
  // const navigate = useNavigate();
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
  // const handleSeeMore = (id) => {
  //   if (user && user.email) {
  //     navigate(`/detailsPage/${id}`);
  //   } else {
  //     document.getElementById("login_modal").showModal();
  //   }
  // };
  const handleSort = () => {
    fetch(`https://b10-a10-server-tau.vercel.app/sort`)
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
    // const sortedData = [...campaigns].sort(
    //   (a, b) => a.minDonation - b.minDonation
    // );
    // setCampaigns(sortedData);
  };
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Campaigns</h1>
        <div className="flex justify-end ">
          <button className="btn btn-primary my-2" onClick={handleSort}>
            sort by Minimum Donation
          </button>
        </div>
        <div className="overflow-x-auto">
          {campaigns.length === 0 ? (
            <div className="w-fit mx-auto">
              <span className="loading loading-bars loading-md"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaigns.map((campaign) => {
                return <Campign key={campaign._id} campaigns={campaign} />;
              })}
            </div>
          )}
          <div className="overflow-x-auto">
            {campaigns.length === 0 && (
              <p className="text-center mt-4 text-gray-500">
                No campaigns found.
              </p>
            )}
          </div>
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
