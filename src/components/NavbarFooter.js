import React from "react"
import Navbar from "./Navbar";
import PaddedSection from "./Section";

const NavbarFooter = ({ hideFooter, downloadResume, children, style }) => (
  <div style={style}>
    <PaddedSection isnavbar>
      <Navbar downloadResume={downloadResume} />
    </PaddedSection>
    {children}
    {
      !hideFooter &&
      <PaddedSection isnavbar isFooter>
        <Navbar isFooter />
      </PaddedSection>
    }
  </div>
)

export default NavbarFooter;