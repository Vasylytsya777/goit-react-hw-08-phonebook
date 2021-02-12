import React from "react";
import HomePageWrapper from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <h2 className="pageTitle">Welcome to phonebook.</h2>
      <p className="pageTitleItem">Please Login.</p>
      <p className="pageTitleItem">First time user? Register now</p>
    </HomePageWrapper>
  );
};

export default HomePage;
