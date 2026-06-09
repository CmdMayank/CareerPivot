import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemCards from "./components/ProblemCards";
import HowItWorks from "./components/HowItWorks";
import ReportPreview from "./components/ReportPreview";
import RoadmapSection from "./components/RoadmapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemCards />
      <HowItWorks />
      <ReportPreview />
      <RoadmapSection />
      <Footer />
    </>
  );
}

export default App;