import audiophile from "../../assets/images/client-audiophile.svg";
import databiz from "../../assets/images/client-databiz.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";

import "./BrandSection.css";

export const BrandSection = () => {
  return (
    <section className="brandSection">
      <img src={databiz} alt="databizImage"></img>
      <img src={audiophile} alt="databizImage"></img>
      <img src={meet} alt="databizImage"></img>
      <img src={maker} alt="databizImage"></img>
    </section>
  );
};
