import React from "react";
import GoToTopButton from "../components/GoToTopButton";
import { Header } from "../layouts";
import Footer from "../layouts/Footer";
import GlobalStyle from "./GlobalStyles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <GoToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
