import React from "react";
import styled from "styled-components";
import Testimonial from "../components/Testimonial";
import media from "../styles/media";

const Section = styled.section`
  padding: 6.8rem 4rem 8rem;
  width: 90vw;
  margin-inline: auto;
  max-width: 128rem;

  ${media.tablet} {
    padding: 10rem 4rem 12rem;
  }

  h3 {
    text-transform: uppercase;
    color: var(--col-grayish-blue);
    letter-spacing: 5.4px;
    text-align: center;
    font-size: 1.68rem;

    ${media.tablet} {
      font-size: 2.2rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  margin-top: 6.6rem;
  gap: 6.6rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

interface DataType {
  image: string;
  content: string;
  name: string;
  position: string;
}

const dataArr: DataType[] = [
  {
    image: "emily",
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    image: "thomas",
    content:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Cheif Operationg Officer",
  },
  {
    image: "jennie",
    content:
      "Incredible end result! Our sales increased over 400% when we worked with SunnySide. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];
const TestimonialSection = () => {
  return (
    <Section>
      <h3>Client testimonials</h3>
      <Grid>
        {dataArr.map((data) => (
          <Testimonial key={data.name} data={data} />
        ))}
      </Grid>
    </Section>
  );
};

export default TestimonialSection;
