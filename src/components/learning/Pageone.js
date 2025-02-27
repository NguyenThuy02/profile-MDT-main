import React from "react";
import Link from "next/link";

const Pageone = () => {
  return (
    <>
      <div className={`text-center round-full text-gray`}>
        <input type="text" placeholder="Nhập từ khóa tìm kiếm..." />
        <input type="submit" value="Tìm kiếm" />
      </div>
      <br></br>
      <div className={`col-lg-4 col-md-6 d-flex justify-between text-center`}>
        <Link
          class="shadow-sm highlight-card rounded-custom p-2 m-2 bg-white"
          href={"/pic"}
        >
          <img
            src="https://i.pinimg.com/474x/71/65/1e/71651e756dc69c9a8b9935507315d4c3.jpg"
            alt="Image 1"
            width={300}
            height={300}
          />
          Ảnh 1
        </Link>
        <Link
          class="shadow-sm highlight-card rounded-custom p-2 m-2 bg-white"
          href={"/pic"}
        >
          <img
            src="https://i.pinimg.com/474x/ec/44/6e/ec446e8e88aa4881db94ce0877b4eff0.jpg"
            alt="Image 2"
            width={300}
            height={300}
          />
          Ảnh 2
        </Link>
        <Link
          class="shadow-sm highlight-card rounded-custom p-2 m-2 bg-white"
          href={"/pic"}
        >
          <img
            src="https://i.pinimg.com/474x/a7/f1/9c/a7f19c18b7e204293474c69f8aa9f531.jpg"
            alt="Image 3"
            width={300}
            height={300}
          />
          Ảnh 3
        </Link>
        <Link
          class="shadow-sm highlight-card rounded-custom p-2 m-2 bg-white"
          href={"/pic"}
        >
          <img
            src="https://i.pinimg.com/474x/c5/01/21/c501210e865e4e6e4e08799aed078568.jpg"
            alt="Image 4"
            width={300}
            height={300}
          />
          Ảnh 4
        </Link>
        <Link
          class="shadow-sm highlight-card rounded-custom p-2 m-2 bg-white"
          href={"/pic"}
        >
          <img
            src="https://i.pinimg.com/474x/f0/9f/ce/f09fce237cb325d4abedfb46315c7e48.jpg"
            alt="Image 5"
            width={300}
            height={300}
          />
          Ảnh 5
        </Link>
      </div>
    </>
  );
};

export default Pageone;
