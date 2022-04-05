import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";

const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 500;
  transition: 0.7s;

  &.active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  height: var(--height-header);
  width: 90vw;
  max-width: 128rem;
`;

const Logo = styled.div`
  position: relative;
  height: 28px;
  width: 120px;

  ${media.tablet} {
    width: 180px;
    height: 32px;
  }
`;

const HamburgerMenu = styled.div`
  width: 32px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${media.tablet} {
    display: none;
  }

  span {
    position: relative;
    display: inline-block;
    background-color: white;
    border-radius: 100px;
    width: 100%;
    height: 3px;
    transition: all 0.5s;

    &::after,
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      border-radius: 100px;
      width: 100%;
      height: 3px;
      transition: all 0.4s;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }

  &.active {
    span {
      background-color: transparent;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }

      &::after {
        top: 0;
        transform: rotate(-45deg);
      }
    }
  }
`;

const Navigation = styled.nav`
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  padding: 3rem;
  background-color: white;
  z-index: 100;
  opacity: 0;
  transform: translateX(calc(-100% - 100px));
  transition: all 0.3s 0.3s;

  ${media.tablet} {
    position: initial;
    top: initial;
    right: initial;
    opacity: 1;
    transform: initial;
    background-color: initial;
    padding: initial;
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
    transition: all 0.3s;

    &::after {
      opacity: 1;
      transition: all 0.3s 0.3s;
    }
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-right: 2.4rem solid white;
    border-top: 2.4rem solid transparent;
    border-bottom: 2.4rem solid transparent;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.5s;

    ${media.tablet} {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.7rem;

    ${media.tablet} {
      flex-direction: row;
      gap: 3.4rem;
    }

    li {
      cursor: pointer;
    }

    a {
      color: var(--col-dark-grayish-blue);
      transition: all 0.3s;

      ${media.tablet} {
        color: var(--col-white);
      }

      &:hover {
        color: var(--col-desaturated-blue);
      }
    }

    li:last-child {
      padding: 1.2rem 2.6rem;
      border-radius: 10rem;
      background-color: var(--col-yellow);
      transition: all 0.5s;

      ${media.tablet} {
        background-color: var(--col-white);

        &:hover {
          color: var(--col-white);
          background-color: var(--col-desaturated-blue);

          a {
            color: var(--col-white);
          }
        }
      }
      a {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-family: var(--font-secondary);
        font-weight: 800;
        color: var(--col-desaturated-blue);
      }
    }
  }
`;

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [background, setBackground] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 850) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });
  }

  return (
    <HeaderEl className={background ? "active" : ""}>
      <HeaderWrapper>
        <div>
          <Logo>
            <Image src="/images/logo.svg" alt="logo" layout="fill" />
          </Logo>
        </div>

        <div className="right-side">
          <HamburgerMenu
            className={isMenuActive ? "active" : ""}
            onClick={() => setIsMenuActive((prev) => !prev)}
          >
            <span />
          </HamburgerMenu>

          <Navigation className={isMenuActive ? "active" : ""}>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </Navigation>
        </div>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
