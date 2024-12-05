import { format } from "date-fns";
import PropTypes from "prop-types";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Campign = ({ campaigns }) => {
  const { _id, imageURL, title, description, deadline } = campaigns;
  const formatedDate = format(new Date(), "yyyy-MM-dd");

  const calculateDeadLine = (deadline) => {
    const today = new Date(formatedDate);
    const targetDate = new Date(deadline);
    const dayLeft = targetDate - today;
    return dayLeft / (1000 * 60 * 60 * 24);
  };

  return (
    <>
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure className="h-[300px]">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-fit"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 80)} </p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-purple-600 text-sm">
              <FiClock className="mr-1" />
              {calculateDeadLine(deadline)} days left
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/detailsPage/${_id}`}
              className="btn btn-primary w-full text-white"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campign;

Campign.propTypes = {
  campaigns: PropTypes.object,
};
