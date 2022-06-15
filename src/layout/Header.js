import React from "react";
import HeroBody from "../components/HeroBody";
import NavBar from "../components/NavBar";

function Header() {
  return (
    <header className="sm-container pt-1 mb-5 bg-primary  hero-section">
      <NavBar />
      <HeroBody />
    </header>
  );
}

export default Header;
