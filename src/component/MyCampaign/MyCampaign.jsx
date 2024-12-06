import { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Context } from "../../ContexApi/ContextProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyCampaign = () => {
  const [Campaign, setCampaigns] = useState([]);

  const { user } = useContext(Context);
  useEffect(() => {
    fetch(
      `https://b10-a10-server-20n6uet60-md-mahmudul-hassans-projects.vercel.app/getdata/${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b10-a10-server-20n6uet60-md-mahmudul-hassans-projects.vercel.app/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Campaign has been deleted.",
                icon: "success",
              });
              const afterDelteData = Campaign.filter(
                (campaign) => campaign._id !== id
              );
              setCampaigns(afterDelteData);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Goal Amount</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Campaign.map((campaign, index) => (
              <tr key={campaign?._id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{campaign?.title}</td>
                <td className="py-3 px-4">{campaign?.description}</td>
                <td className="py-3 px-4">{campaign?.goalAmount}</td>
                <td className="py-3 px-4 text-center flex justify-center gap-4">
                  <Link
                    to={`/update/${campaign._id}`}
                    className="btn btn-sm btn-primary flex items-center gap-2"
                  >
                    <FaEdit /> Update
                  </Link>
                  <button
                    className="btn btn-sm btn-error flex items-center gap-2"
                    onClick={() => handleDelete(campaign?._id)}
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {Campaign.length === 0 && (
          <p className="text-center mt-4 text-gray-500">No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
