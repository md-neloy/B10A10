import { FaHeartbeat, FaBook, FaSeedling, FaBriefcase } from "react-icons/fa";

const ImpactfullCauses = () => {
  const causes = [
    {
      icon: <FaHeartbeat />,
      title: "Medical Needs",
      description: "Support urgent medical expenses and healthcare.",
    },
    {
      icon: <FaBook />,
      title: "Education",
      description: "Fund scholarships, schools, and educational tools.",
    },
    {
      icon: <FaSeedling />,
      title: "Environment",
      description: "Back projects focused on sustainability and nature.",
    },
    {
      icon: <FaBriefcase />,
      title: "Startups",
      description: "Help entrepreneurs bring their ideas to life.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Impactful Causes
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Discover the categories that drive change and make a difference.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md hover:shadow-lg rounded-lg text-center"
            >
              <div className="text-primary text-4xl mb-4">{cause.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
              <p className="text-gray-600">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactfullCauses;
