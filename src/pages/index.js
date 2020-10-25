import React from "react"

import SEO from "../components/seo"

import PaddedSection from "../components/Section";
import HR from "../components/HR";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";
import NavbarFooter from "../components/NavbarFooter";

const IndexPage = () => (
  <NavbarFooter>
    <SEO title="Home" />
    <PaddedSection>
      <Header />
    </PaddedSection>
    <HR />
    <PaddedSection>
      <WorkExperience />
    </PaddedSection>
    {/*<HR />
    <PaddedSection>
      <Projects />
    </PaddedSection>*/}
    <HR />
  </NavbarFooter>
)

export default IndexPage;