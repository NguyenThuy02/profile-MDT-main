import React from "react";

export default function VideoPlayer() {
  return (
    <div className="video-section">
      <video controls className="video-player">
        <source src="/video/multihoa.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div className="video-info">
        <div style={{ padding: "7px" }}>Thông tin của Video</div>
        <ul>
          <li>📌 Chất lượng: 1080p</li>
          <li>🎬 Định dạng: .mp4</li>
          <li>⏱️ Thời lượng: 37s</li>
        </ul>
        <p>
          Mô tả: Đây là một video demo. Video này là một bộ sưu tập nhiều loài
          hoa khác nhau từ khắp nơi trên thế giới, tạo ra một không gian sinh
          động và đầy màu sắc. Mỗi loại hoa đều mang những đặc trưng riêng biệt
          và chứa đựng một thông điệp riêng. Hãy cùng thưởng thức nhé.
        </p>
      </div>
    </div>
  );
}
