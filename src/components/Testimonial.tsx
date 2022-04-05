import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Card = styled.div`
  text-align: center;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  width: 100%;
`;

const Avatar = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;
  margin-inline: auto;

  ${media.tablet} {
    width: 12rem;
    height: 12rem;
  }
`;

const Content = styled.p`
  flex: 1;
  margin-inline: auto;
  max-width: 95%;
  font-size: 1.9rem;
  line-height: 1.8;
  color: var(--col-very-dark-grayish-blue);
`;

const Info = styled.div`
  .name {
    font-family: var(--font-secondary);
    font-weight: 900;
    font-size: 1.8rem;
    color: var(--coldesaturated-blue);
  }

  .position {
    margin-top: 1rem;
    color: var(--col-grayish-blue);
    font-size: 1.5rem;
  }
`;

interface DataType {
  image: string;
  content: string;
  name: string;
  position: string;
}
const Testimonial = ({ data }: { data: DataType }) => {
  return (
    <Card>
      <Avatar>
        <Image
          src={`/images/image-${data.image}.jpg`}
          alt="avatar"
          layout="fill"
        />
      </Avatar>
      <Content>{data.content}</Content>
      <Info>
        <p className="name">{data.name}</p>
        <p className="position">{data.position}</p>
      </Info>
    </Card>
  );
};

export default Testimonial;
