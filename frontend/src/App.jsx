import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemCards from "./components/ProblemCards";
import HowItWorks from "./components/HowItWorks";
import ReportPreview from "./components/ReportPreview";
import RoadmapSection from "./components/RoadmapSection";
import Footer from "./components/Footer";
import ResumeUpload from "./components/ResumeUpload";
import CareerPaths from "./components/CareerPaths";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResumeUpload />
      <ProblemCards />
      <HowItWorks />
      <CareerPaths />
      <ReportPreview />
      <RoadmapSection />
      <Footer />
    </>
  );
}

export default App;