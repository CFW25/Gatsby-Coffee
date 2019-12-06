import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Navbar from './Globals/Navbar';
import Footer from './Globals/Footer';

import "./bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => 
  <>
    <Navbar />
    {children}
    <Footer />
  </>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
