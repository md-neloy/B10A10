import { FaLightbulb, FaDonate, FaHandsHelping } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gradient-to-tr from-purple-200 via-blue-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">How It Works</h2>
        <p className="text-lg text-gray-600 mb-8">
          Create, share, and support impactful campaigns in just a few simple
          steps.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaLightbulb className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Create a Campaign</h3>
            <p className="text-gray-600">
              Start by setting up your campaign with a clear goal and
              description.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaDonate className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Share with Others</h3>
            <p className="text-gray-600">
              Share your campaign with friends, family, and the community to
              gather support.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaHandsHelping className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Achieve Your Goal</h3>
            <p className="text-gray-600">
              Watch your campaign grow as donations come in and bring your idea
              to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
