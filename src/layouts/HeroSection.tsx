import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import media from "../styles/media";

const arrowAnimation = keyframes`
 0% { height: 18rem; }
 80% { height: 22rem; }
 100% { height: 20rem;  }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  z-index: 10;
  height: calc(100vh - var(--height-header));
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 5.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  font-family: var(--font-secondary);
  text-align: center;
  color: var(--col-white);
  margin-top: 12rem;

  ${media.tablet} {
    font-size: 7.5rem;
    letter-spacing: 6px;
  }
`;

const ArrowIcon = styled.div`
  position: relative;
  height: 20rem;
  width: 6rem;
  animation: ${arrowAnimation} 2s alternate infinite;
`;

const HeroSection = () => {
  return (
    <Section>
      <Heading>We are creatives</Heading>
      <ArrowIcon>
        <Image
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          layout="fill"
        />
      </ArrowIcon>
    </Section>
  );
};

export default HeroSection;
