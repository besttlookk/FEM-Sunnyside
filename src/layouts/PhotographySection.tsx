import Image from "next/image";
import React from "react";
import Picture from "../components/Picture";
import { Section } from "../styles/shared";

const PhotographySection = () => {
  return (
    <Section reverse={false} inline={true}>
      <div className="section__image">
        <Picture imageName="photography" />

        {/*  */}
        <div className="image-text" style={{ color: "hsl(198, 62%, 26%)" }}>
          <h3> Photography</h3>
          <p>
            {" "}
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PhotographySection;
