import React from "react"
import Navbar from "./Navbar";
import PaddedSection from "./Section";

const NavbarFooter = ({ hideFooter, downloadResume, children, style, hideChefNotification }) => (
  <div style={style}>
    <PaddedSection isnavbar>
      <Navbar downloadResume={downloadResume} hideChefNotification={hideChefNotification}/>
    </PaddedSection>
    {children}
    {
      !hideFooter &&
      <PaddedSection isnavbar isFooter>
        <Navbar isFooter hideChefNotification />
      </PaddedSection>
    }
  </div>
)

export default NavbarFooter;