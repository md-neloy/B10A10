import { useEffect } from "react";

const AllCampaign = () => {
  useEffect(() => {
    async function getData() {
      const result = await fetch(`http://localhost:5000/getcampaign`);
      const data = await result.json();
      console.log(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h3>All Campaign</h3>
    </div>
  );
};

export default AllCampaign;
