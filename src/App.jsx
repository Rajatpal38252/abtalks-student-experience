import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import MomentumRecovery from "./components/MomentumRecovery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./pages/Dashboard";
import DayPage from "./pages/DayPage";
import CertificatePage from "./pages/CertificatePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChallengeProvider } from "./context/ChallengeContext";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <HowItWorks />
      <Features />
      <Benefits />
      <MomentumRecovery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ChallengeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challenge/day/:day" element={<DayPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </ChallengeProvider>
    </BrowserRouter>
  );
}

export default App;
