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

  const successNofity = () => {
    toast.success("Successfully Added Your Donation!", {
      position: "top-center",
    });
  };
  // Handle Donate Button Click
  const handleDonate = () => {
    fetch(`http://localhost:5000/donation`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaigns),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          successNofity();
        }
      });
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
