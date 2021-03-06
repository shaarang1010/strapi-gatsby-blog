import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";
import Footer from './footer';

const Layout = ({ children, seo, footer }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              publicURL
            }
          }
          footer{
            content
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
        <Footer data={footer} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
