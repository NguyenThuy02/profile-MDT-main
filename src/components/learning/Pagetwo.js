//import Link from "next/link";
import React from "react";

const Pagetwo = () => {
  return (
    <div className="table-responsive rounded-lg">
      <table className="table table-bordered rounded-lg">
        <thead>
          <tr>
            <th>Họ đệm</th>
            <th>Tên</th>
            <th>Năm sinh</th>
            <th>Địa chỉ</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nguyet</td>
            <td>Thuy</td>
            <td>0</td>
            <td>Quy Nhơn</td>
            <td>ex@gmail.com</td>
          </tr>
          <tr>
            <td>Nguyet</td>
            <td>Thuy</td>
            <td>0</td>
            <td>Quy Nhơn</td>
            <td>ex@gmail.com</td>
          </tr>
          <tr>
            <td>Nguyet</td>
            <td>Thuy</td>
            <td>0</td>
            <td>Quy Nhơn</td>
            <td>ex@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pagetwo;
