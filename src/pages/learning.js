import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import BasePackage from "@components/app-management/BasePackage";
import PlusPackage from "@components/app-management/plusPackage";
import PremiumPackage from "@components/app-management/PremiumPackage";
import Pageone from "@components/learning/Pageone";
import Pagetwo from "@components/learning/Pagetwo";
import Pagethree from "@components/learning/Pagethree";

const Learning = () => {
  return (
    <Layout title="Learning" desc="Explore our smart home packages">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Smart Home Solutions"
        desc="Experience the future of home automation with our cutting-edge smart home packages. From basic motion detection to advanced remote control systems."
      />
      <main>
        <div>
          <h1 className="text-center">Learning</h1>
        </div>
        <div className="ml-20">
          <h4>Kho lưu trữ</h4>
          <Pageone />
        </div>
        <br></br>
        <h4>
          Xem thêm
          <Pagethree />
        </h4>
        <br></br>
        <h4>
          Bảng thông tin
          <Pagetwo />
        </h4>

        <a href="login" title="login">
          Đăng nhập
        </a>
      </main>

      <BasePackage />
      <PlusPackage />
      <PremiumPackage />
      <Footer footerLight />
    </Layout>
  );
};

export default Learning;
