import Banner from "@/components/banner/Banner";
import SearchBar from "@/components/search-bar/SearchBar";
import HowWorks from "@/components/how-work/HowWorks";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import WhyYouChoose from "@/components/why-you-choose/WhyYouChoose";

const Home = () => {
  return (
    <main>
      <Banner />
      <SearchBar />
      <HowWorks />
      <WhyChooseUs />
      <WhyYouChoose />
    </main>
  );
};

export default Home;
