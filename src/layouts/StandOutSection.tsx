import Image from "next/image";
import Link from "next/link";
import React from "react";
import Picture from "../components/Picture";
import { Section } from "../styles/shared";

const StandOutSection = () => {
  return (
    <Section reverse={false} inline={false}>
      <div className="section__image">
        <Picture imageName="stand-out" />
      </div>
      <div className="section__content">
        <h2>
          Stand out to the <span>right audience</span>
        </h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <Link href="/">Learn More</Link>
      </div>
    </Section>
  );
};

export default StandOutSection;
