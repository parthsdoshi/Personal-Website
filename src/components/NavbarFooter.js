import React from "react"
import Navbar from "./Navbar";
import Section from "./Section";

const NavbarFooter = ({ hideFooter, downloadResume, children }) => (
  <>
    <Section>
      <Navbar downloadResume={downloadResume} />
    </Section>
    {children}
    {
      !hideFooter &&
      <Section isFooter>
        <Navbar isFooter />
      </Section>
    }
  </>
)

export default NavbarFooter;