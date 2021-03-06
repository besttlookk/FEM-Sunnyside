import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import {
  GraphicSection,
  HeroSection,
  StandOutSection,
  TransformSection,
  GallerySection,
  PhotographySection,
  TestimonialSection,
} from "../layouts";
import media from "../styles/media";

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-image: url("/images/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

  ${media.tablet} {
    background-image: url("/images/desktop/image-header.jpg");
    background-position: center;
  }
`;

const SectionWrapper = styled.div`
  ${media.tablet} {
    display: flex;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sunnyside | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImage />
      <HeroSection />
      <TransformSection />
      <StandOutSection />
      <SectionWrapper>
        <GraphicSection />
        <PhotographySection />
      </SectionWrapper>
      <TestimonialSection />
      <GallerySection />
    </>
  );
};

export default Home;
