import Banner from "@/components/banner/Banner";
import SearchBar from "@/components/search-bar/SearchBar";
import HowWorks from "../components/how-work/HowWorks";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import OurVehicle from "@/components/our-vehicles/OurVehicle";

const Home = () => {
  return (
    <main>
      <Banner />
      <SearchBar />
      <HowWorks />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
