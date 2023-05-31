import { useEffect, useState } from "react";
import heroMobileImage from "../../assets/images/image-hero-desktop.png";
import heroDeskImage from "../../assets/images/image-hero-mobile.png";
import { BrandSection } from "../BrandSection/BrandSection";
import "./HeroMain.css";

export const HeroMain = () => {
  const [isDesk, setIsDesk] = useState<boolean>();

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsDesk(true);
      console.log("verdad inicial");
    }
    if (window.innerWidth > 1000) {
      setIsDesk(false);
      console.log("mentira inicial");
    }
  }, []);

  const test = window.matchMedia("(min-width:1000px)");
  test.addEventListener("change", () => {
    setIsDesk(!isDesk);
  });

  return (
    <div className="heroMain__container">
      <>
        {isDesk ? (
          <img src={heroDeskImage} alt="HeroImage"></img>
        ) : (
          <img src={heroMobileImage} alt="HeroImage"></img>
        )}
      </>
      <div className="heroMain__container--text">
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
      </div>
      <button>Learn More</button>
      <BrandSection></BrandSection>
    </div>
  );
};
