import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

const CryptoFooter = () => {
  return (
    <footer className="bg-dark-black crypto-footer pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="crypto-footer-widget text-center">
              <div className="">
                <Link href="/" className="crypto-logo">
                  <Image
                    src="/logo-white.png"
                    className="mb-30"
                    alt="logo"
                    width={113}
                    height={36}
                  />
                </Link>
                <p>
                  Bitcoin, first released as open-source software in is the
                  first decentralized cryptocurrency. Since the release of
                  bitcoin
                </p>
              </div>
              <nav className="crypto-footer-nav py-5">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link
                      href="/"
                      className="text-decoration-none fw-semibold text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link
                      href="/about-us"
                      className="text-decoration-none fw-semibold text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link
                      href="/about-us"
                      className="text-decoration-none fw-semibold text-white"
                    >
                      Market
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link
                      href="/about-us"
                      className="text-decoration-none fw-semibold text-white"
                    >
                      Trading
                    </Link>
                  </li>
                  <li className="list-inline-item px-lg-4 px-3">
                    <Link
                      href="/about-us"
                      className="text-decoration-none fw-semibold text-white"
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </nav>
              <h4 className="text-white mb-4 fw-medium">
                Join the Conversation
              </h4>
              <ul className="list-unstyled crypto-footer-social pb-120">
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaDribbble />
                    </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i>
                      <FaBehance />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="crypto-footer-border py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="crypto-footer-left">
                <p className="m-0 text-center text-lg-start">
                  Copyright@themestags. 2022. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="crypto-footer-right text-center text-md-end">
                <ul className="list-unstyled mt-3 mt-md-0">
                  <li className="list-inline-item pe-2">
                    <Link href="/help-center" className="text-decoration-none">
                      Support
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/help-center" className="text-decoration-none">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CryptoFooter;
