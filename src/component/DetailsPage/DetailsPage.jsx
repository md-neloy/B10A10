import { format } from "date-fns";
import { useContext } from "react";
import { FaDonate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../ContexApi/ContextProvider";

const DetailsPage = () => {
  const { user } = useContext(Context);
  const campaigns = useLoaderData();
  const {
    imageURL,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    userName,
    userEmail,
  } = campaigns;

  const DonationDetails = {
    imageURL,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    userEmail: `${user?.email}`,
    userName: `${user?.displayName}`,
  };

  const successNofity = () => {
    toast.success("Successfully Added Your Donation!", {
      position: "top-center",
    });
  };

  const ErrorNofity = () => {
    toast.error("Sorry, the deadline is over!", {
      position: "top-center",
    });
  };

  // Current Date
  const formatedDate = format(new Date(), "yyyy-MM-dd");
  const currentDate = new Date(formatedDate);
  const targetDate = new Date(deadline);
  const dayLeft = (targetDate - currentDate) / (1000 * 60 * 60 * 24);

  // Handle Donate Button Click
  const handleDonate = () => {
    if (dayLeft > 0) {
      fetch(`https://b10-a10-server-tau.vercel.app/donation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(DonationDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            successNofity();
          }
        })
        .catch((err) => console.log(err));
    } else {
      ErrorNofity();
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-4xl text-center font-bold my-4">
        Details Page
      </h2>
      <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="w-full h-60 sm:h-80 lg:h-[400px] overflow-hidden mb-4">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Campaign Details */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            <strong>Type:</strong> {campaignType}
          </p>
          <p className="text-sm md:text-base text-gray-700">{description}</p>
          <p className="text-sm md:text-base text-gray-500">
            <strong>Minimum Donation:</strong> ${minDonation}
          </p>
          <p className="text-sm md:text-base text-gray-500">
            <strong>Deadline:</strong> {deadline}
          </p>
          <p className="text-sm md:text-base text-gray-500">
            <strong>Organizer:</strong> {userName} ({userEmail})
          </p>
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="btn btn-primary w-full mt-6 flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <FaDonate /> Donate
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
