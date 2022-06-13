import React, { Fragment } from "react";
import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

function NavBar() {
  return (
    <Fragment>
      <TopNavBar />
      <BottomNavBar />
    </Fragment>
  );
}

export default NavBar;
