import Image from "next/image";
import Link from "next/link";
import React from "react";
import Picture from "../components/Picture";
import { Section } from "../styles/shared";

const TransformSection = () => {
  return (
    <Section reverse={true} inline={false}>
      <div className="section__image">
        <Picture imageName="transform" />
      </div>
      <div className="section__content">
        <h2>
          Transform your <span>brand</span>
        </h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link href="/">Learn More</Link>
      </div>
    </Section>
  );
};

export default TransformSection;
