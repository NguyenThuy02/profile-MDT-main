import React, { useState } from "react";

const Pagethree = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    flowerType: "rose",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleHideInfo = () => {
    setIsSubmitted(false); // Đặt lại trạng thái để hiển thị lại form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      flowerType: "rose", // Đặt lại giá trị mặc định của form
    });
  };

  return (
    <div className="form-container">
      {!isSubmitted && (
        <div className="form-box">
          <h2 className="form-title">Đăng ký mua hoa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="flowerType" className="form-label">
                Loại hoa
              </label>
              <select
                id="flowerType"
                name="flowerType"
                className="form-input"
                value={formData.flowerType}
                onChange={handleChange}
                required
              >
                <option value="rose">Hoa hồng</option>
                <option value="lily">Hoa ly</option>
                <option value="orchid">Hoa lan</option>
                <option value="tulip">Hoa tulip</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">
                Đặt mua
              </button>
            </div>
          </form>
        </div>
      )}

      {isSubmitted && (
        <div className="form-box">
          <h2 className="form-title">Thông tin đặt mua hoa</h2>
          <div className="form-info">
            <p>
              <strong>Họ và tên:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {formData.phone}
            </p>
            <p>
              <strong>Loại hoa:</strong> {formData.flowerType}
            </p>
          </div>
          <button
            type="button"
            onClick={handleHideInfo}
            className="form-button"
          >
            Ẩn thông tin
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagethree;
