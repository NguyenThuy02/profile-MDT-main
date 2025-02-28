import React from "react";
import Link from "next/link";

const Pageone = () => {
  return (
    <div className="pic">
      <div className="row g-0">
        <div className="col-md-6 col-xl-3 col-lg-4 col-sm-12">
          <div className="cyber-price-chart">
            <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-2 mb-4 mb-lg-0">
              <Link href="/pic" className="mt-2">
                <img
                  src="https://i.pinimg.com/474x/71/65/1e/71651e756dc69c9a8b9935507315d4c3.jpg"
                  alt="Image 1"
                  width={250}
                  height={250}
                />
                <br></br>
                Ảnh 1
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 col-lg-4 col-sm-12">
          <div className="cyber-price-chart">
            <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-2 mb-4 mb-lg-0">
              <Link href="/pic" className=" mt-2">
                <img
                  src="https://i.pinimg.com/474x/ec/44/6e/ec446e8e88aa4881db94ce0877b4eff0.jpg"
                  alt="Image 2"
                  width={250}
                  height={250}
                />
                <br></br>
                Ảnh 2
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 col-lg-4 col-sm-12">
          <div className="cyber-price-chart">
            <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-2 mb-4 mb-lg-0">
              <Link href="/pic" className=" mt-2">
                <img
                  src="https://i.pinimg.com/474x/a7/f1/9c/a7f19c18b7e204293474c69f8aa9f531.jpg"
                  alt="Image 3"
                  width={250}
                  height={250}
                />
                <br></br>
                Ảnh 3
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 col-lg-4 col-sm-12">
          <div className="cyber-price-chart">
            <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-2 mb-4 mb-lg-0">
              <Link href="/pic" className=" mt-2">
                <img
                  src="https://i.pinimg.com/474x/f0/9f/ce/f09fce237cb325d4abedfb46315c7e48.jpg"
                  alt="Image 4"
                  width={250}
                  height={250}
                />
                <br></br>
                Ảnh 4
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageone;
