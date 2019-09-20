import React from "react"
import Navbar from "./Navbar";
import Section from "./Section";

const NavbarFooter = (props) => (
  <>
    <Section>
      <Navbar />
    </Section>
    {props.children}
    {
      !props.hideFooter &&
      <Section isFooter>
        <Navbar isFooter />
      </Section>
    }
  </>
)

export default NavbarFooter;