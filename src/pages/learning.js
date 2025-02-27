import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import FaqTwo from "@components/faq/FaqTwo";
import Pageone from "@components/learning/Pageone";
import PageHeader from "@components/common/PageHeader";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import Link from "next/link";
import Pagetwo from "@components/learning/Pagetwo";
import "@pages/learning";

const Learning = () => {
  return (
    <Layout title="Learning" desc="Learning page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Đây là trang Learning"
        desc="Trang này do Nguyệt Thúy design nhé."
      />
      <>
        <div>
          <h1 className="text-center">Learning</h1>
        </div>
        <div className="ml-20">
          <h3>
            Kho lưu trữ
            <Pageone ptClass="pt-120" />
          </h3>
        </div>
        <h3>
          Xem thêm
          <Pagetwo />
        </h3>

        <a href="login" title="login">
          Đăng nhập
        </a>
      </>
      <FaqTwo />
      <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" />
      <Footer />
    </Layout>
  );
};

export default Learning;
