import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import BasePackage from "@components/app-management/BasePackage";
import PlusPackage from "@components/app-management/plusPackage";
import PremiumPackage from "@components/app-management/PremiumPackage";

const Services = () => {
  return (
    <Layout title="Smart Home Services" desc="Explore our smart home packages">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Smart Home Solutions"
        desc="Experience the future of home automation with our cutting-edge smart home packages. From basic motion detection to advanced remote control systems."
      />

      <BasePackage />
      <PlusPackage />
      <PremiumPackage />
      <Footer footerLight />
    </Layout>
  );
};

export default Services;
