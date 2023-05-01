import { NextStudio } from "next-sanity/studio";
import { config } from "../../sanity.config";

const Adminpage = () => {
  return <NextStudio config={config} />;
};

export default Adminpage;
