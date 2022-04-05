import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .mobile-img {
    display: block !important;

    ${media.tablet} {
      display: none !important;
    }
  }

  .desktop-img {
    display: none !important;

    ${media.tablet} {
      display: block !important;
      border: 1px solid red;
    }
  }
`;

const Picture = ({ imageName }: { imageName: string }) => {
  return (
    <ImageContainer>
      <Image
        src={`/images/desktop/image-${imageName}.jpg`}
        alt="sunnyside-img"
        layout="fill"
        className="desktop-img"
      />

      <Image
        src={`/images/mobile/image-${imageName}.jpg`}
        alt="sunnyside-img"
        layout="fill"
        className="mobile-img"
      />
    </ImageContainer>
  );
};

export default Picture;
