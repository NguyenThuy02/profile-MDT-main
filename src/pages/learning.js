import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
//import BasePackage from "@components/app-management/BasePackage";
//import PlusPackage from "@components/app-management/plusPackage";
//import PremiumPackage from "@components/app-management/PremiumPackage";
import Pageone from "@components/learning/Pageone";
import Pagetwo from "@components/learning/Pagetwo";
import Pagethree from "@components/learning/Pagethree";

const Learning = () => {
  return (
    <Layout title="Learning" desc="learning home">
      <Navbar classOption="navbar-light" />
      <PageHeader title="Learning" desc="Đây là trang do me design." />
      <main>
        <div className="title">Learning</div>
        <>
          <div className="content">Kho lưu trữ</div>

          <Pageone />

          <div className="content mb-2">Bảng thông tin về các loài hoa</div>
          <Pagetwo />

          <Pagethree />
        </>
        <a
          href="demo"
          title="demo"
          className="content mr-15 mt-3"
          style={{ float: "right" }}
        >
          Xem Demo
        </a>
      </main>

      {/*
        <BasePackage />
      <PlusPackage />
      <PremiumPackage />
        */}
      <Footer footerLight />
    </Layout>
  );
};

export default Learning;
