import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCampaign = () => {
  const loadData = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    imageURL,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    userEmail,
    userName,
  } = loadData;
  const [formData, setFormData] = useState({
    imageURL: `${imageURL}`,
    title: `${title}`,
    campaignType: `${campaignType}`,
    description: ` ${description}`,
    minDonation: `${minDonation}`,
    deadline: `${deadline}`,
    userEmail: `${userEmail}`,
    userName: `${userName}`,
  });
  // toast
  const successNofity = () => {
    toast.success("Successfully Updated!", {
      position: "top-center",
    });
  };
  // onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // update
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          successNofity();
          navigate("/mycampaign");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        Update Your Campaign
      </h2>
      <form
        onSubmit={handleUpdate}
        className="space-y-5 bg-slate-400 p-8 rounded-lg shadow-xl"
      >
        {/* Campaign Title */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter campaign title"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">
            Image/Thumbnail URL
          </label>
          <div className="relative">
            <input
              type="url"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter image URL"
              required
            />
            <FaImage className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500" />
          </div>
        </div>

        {/* Campaign Type */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Campaign Type</label>
          <select
            name="campaignType"
            value={formData.campaignType}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Campaign Type</option>
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Description</label>
          <textarea
            rows={1}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Describe your campaign"
            required
          ></textarea>
        </div>

        {/* Minimum Donation Amount */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter minimum donation"
            required
          />
        </div>

        {/* Deadline */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Email (Read-Only) */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Name (Read-Only) */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Add Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary w-full md:w-1/2 text-white"
          >
            Update Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
