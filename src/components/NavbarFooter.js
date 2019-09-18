import React from "react"
import Navbar from "./Navbar";
import Section from "./Section";

const NavbarFooter = ({ children }) => (
  <>
    <Section>
      <Navbar />
    </Section>
    {children}
    <Section isFooter>
      <Navbar isFooter />
    </Section>
  </>
)

export default NavbarFooter;