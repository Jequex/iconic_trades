import { Button } from "@/components/ui/Button";
import TabComp from "@/components/users sessions/Auth/dashboard/TabComp";

interface HomeProps {}

const Home = () => {
  return (
    <main className=" min-h-screen  mx-auto ">
      <div className="max-w-screen-xl mx-auto p-4">
        <h3 className="text-2xl text-white font-bold pb-3 ">Dashboard</h3>
        <TabComp />
      </div>
    </main>
  );
};

export default Home;
