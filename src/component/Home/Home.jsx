import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import ImpactfullCauses from "../ImpactFullCause/ImapctfullCauses";
import RunningCampaign from "../RunningCampaign/RunningCampaign";

const Home = () => {
  return (
    <div>
      <Banner />
      <RunningCampaign />
      <HowItWorks />
      <ImpactfullCauses />
    </div>
  );
};

export default Home;
