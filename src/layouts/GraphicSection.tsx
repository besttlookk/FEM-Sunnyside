import Image from "next/image";
import React from "react";
import Picture from "../components/Picture";
import { Section } from "../styles/shared";

const GraphicSection = () => {
  return (
    <Section reverse={false} inline={true}>
      <div className="section__image">
        <Picture imageName="graphic-design" />

        {/*  */}
        <div className="image-text" style={{ color: "hsl(167, 40%, 24%)" }}>
          <h3>Graphic Design</h3>
          <p>
            {" "}
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default GraphicSection;
