import React from "react";
import styled from "styled-components";
import Picture from "../components/Picture";
import media from "../styles/media";

const GalleryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 300px;

  ${media.tablet} {
    height: 500px;
  }
`;

const GallerySection = () => {
  return (
    <GalleryGrid>
      <GalleryImage>
        <Picture imageName="gallery-milkbottles" />
      </GalleryImage>
      <GalleryImage>
        <Picture imageName="gallery-orange" />
      </GalleryImage>
      <GalleryImage>
        <Picture imageName="gallery-cone" />
      </GalleryImage>
      <GalleryImage>
        <Picture imageName="gallery-sugar-cubes" />
      </GalleryImage>
    </GalleryGrid>
  );
};

export default GallerySection;
