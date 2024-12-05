import { useContext } from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWork/HowItWorks";
import ImpactfullCauses from "../ImpactFullCause/ImapctfullCauses";
import RunningCampaign from "../RunningCampaign/RunningCampaign";
import { Context } from "../../ContexApi/ContextProvider";

const Home = () => {
  const { togol } = useContext(Context);
  return (
    <div style={{ background: togol ? "#1F2937" : "white" }}>
      <Banner />
      <RunningCampaign />
      <HowItWorks />
      <ImpactfullCauses />
    </div>
  );
};

export default Home;
