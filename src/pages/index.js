import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaGulp } from "react-icons/fa";
import Info from "../components/Home/Info";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";
import Menu from "../components/Home/Menu";

import BackgroundSection from "../components/Globals/BackgroundSection";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="home-roast"
    />
    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contact/>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;



export default IndexPage;
