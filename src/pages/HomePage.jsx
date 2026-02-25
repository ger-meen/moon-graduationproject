import BestSeller from "../components/BestSellerSection/BestSeller";
import SignUpButton from "../components/ButtonForSignUp/SignUpButton";
import CollectionCards from "../components/CollectionSection/CollectionCards";
import HeroSection from "../components/HeroSection/HeroSection";
import HistorySection from "../components/HistorySection/HistorySection";
import NewArrival from "../components/NewArrival/NewArrival";
import OurBlog from "../components/OurBlogSection/OurBlog";
import SaleSection from "../components/SaleSection/SaleSection";

export default function HomePage() {
  return (
   <>
      <HeroSection/>
      <CollectionCards/>
      <SaleSection/>
      <BestSeller/>
      <HistorySection/>
      <NewArrival/>
      <OurBlog/>
      <SignUpButton/>

   </>
  )
}
