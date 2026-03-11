import AboutDescription from "../components/AboutDescription/AboutDescription";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection";
import AboutHistory from "../components/AboutHistorySection/AboutHistory";
import AboutTeam from "../components/AboutTeam/AboutTeam";
import SignUpButton from "../components/ButtonForSignUp/SignUpButton";

export default function AboutPage() {
  return (
   <>
   <AboutHeroSection/>
   <AboutHistory/>
   <AboutDescription/>
   <AboutTeam/>
   <SignUpButton/>
   </>
  )
}
