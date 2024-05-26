import Navbar from "../components/Navbar";
import HeroSections from "../components/HeroSections";
import Footer from "../components/Footer";
import StudentTable from "../components/StudentTable";

const Home = () => {
  return (
    <main className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSections />
      <StudentTable />
      <Footer />
    </main>
  );
};

export default Home;
