import { format } from "date-fns";
import { FaDonate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const DetailsPage = () => {
  const campaigns = useLoaderData();
  const {
    imageURL,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    userEmail,
    userName,
  } = campaigns;
  const DonationDetails = {
    imageURL,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    userEmail,
    userName,
  };

  const successNofity = () => {
    toast.success("Successfully Added Your Donation!", {
      position: "top-center",
    });
  };
  const ErrorNofity = () => {
    toast.error("Sorry The DeadLine is over!", {
      position: "top-center",
    });
  };

  // current date
  const formatedDate = format(new Date(), "yyyy-MM-dd");
  const currentDate = new Date(formatedDate);
  const targetDate = new Date(deadline);
  const dayLeft = (targetDate - currentDate) / (1000 * 60 * 60 * 24);
  // Handle Donate Button Click
  const handleDonate = () => {
    fetch(`https://b10-a10-server-tau.vercel.app/donation`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(DonationDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged && dayLeft > 0) {
          successNofity();
        } else {
          ErrorNofity();
        }
      })
      .catch((err) => console.log(err));
    console.log("hello");
  };
  return (
    <div>
      <h2>Details Page</h2>
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-fit  lg:h-full object-fill rounded-md mb-4 "
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 my-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Type:</strong> {campaignType}
        </p>
        <p className="text-gray-700 text-base mb-6">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Minimum Donation:</strong> ${minDonation}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Deadline:</strong> {deadline}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Organizer:</strong> {userName} ({userEmail})
        </p>
        <button
          onClick={handleDonate}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <FaDonate /> Donate
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
