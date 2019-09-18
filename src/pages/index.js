import React from "react"

import SEO from "../components/seo"

import Section from "../components/Section";
import HR from "../components/HR";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";
import NavbarFooter from "../components/NavbarFooter";

const IndexPage = () => (
  <NavbarFooter>
    <SEO title="Home" />
    <Section>
      <Header />
    </Section>
    <HR />
    <Section>
      <WorkExperience />
    </Section>
    {/*<HR />
    <Section>
      <Projects />
    </Section>*/}
    <HR />
  </NavbarFooter>
)

export default IndexPage;