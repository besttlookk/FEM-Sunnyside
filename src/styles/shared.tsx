import styled from "styled-components";
import media from "./media";

interface Props {
  reverse: boolean;
  inline: boolean;
}

export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${media.tablet} {
    flex-direction: row;
    width: ${(p) => p.inline && "50%"};
  }

  .section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
    text-align: center;
    padding: 6rem;

    ${media.tablet} {
      order: ${(p) => (p.reverse ? 1 : 2)};
      width: 50%;
      flex: initial;
      padding: 0 8rem;
      text-align: left;
      align-items: initial;
    }

    h2 {
      font-family: var(--font-secondary);
      font-weight: 900;
      font-size: 3.6rem;
      color: var(--col-desaturated-blue);

      ${media.tablet} {
        font-size: 5.6rem;
      }

      span {
        display: block;
      }
    }

    p {
      font-size: 1.7rem;
      line-height: 1.5;
      margin-block: 3rem 8rem;
      color: var(--col-dark-grayish-blue);

      ${media.tablet} {
        max-width: 56rem;
        font-size: 2rem;
        line-height: 1.7;
      }
    }

    a {
      text-transform: uppercase;
      color: var(--col-desaturated-blue);
      font-size: 1.6rem;
      font-family: var(--font-secondary);
      font-weight: 900;
      text-decoration: underline;
      text-decoration-color: var(--col-yellow);
      text-decoration-thickness: 4px;
      text-underline-offset: 4px;
    }
  }

  .section__image {
    position: relative;
    flex: 1;

    ${media.tablet} {
      order: ${(p) => (p.reverse ? 2 : 1)};
      width: ${(p) => (p.inline ? "100%" : "50%")};
      flex: initial;
    }

    .image-text {
      position: absolute;
      top: 65%;
      right: 0;
      left: 0;
      z-index: 10;
      text-align: center;
      padding-inline: 1.6rem;

      h3 {
        font-family: var(--font-secondary);
        font-size: 2.6rem;
        font-weight: 900;

        ${media.tablet} {
          font-size: 4.8rem;
        }
      }

      p {
        line-height: 1.6;
        max-width: 380px;
        margin-block: 2.6rem;
        margin-inline: auto;
        font-size: 1.7rem;

        ${media.tablet} {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
