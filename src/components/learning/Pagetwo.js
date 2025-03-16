import React from "react";

const flowers = [
  {
    name: "Hoa Hồng",
    scientificName: "Rosa",
    color: "Đỏ, Hồng, Trắng, Vàng",
    meaning: "Tượng trưng cho tình yêu, sự lãng mạn",
    origin: "Châu Âu, Châu Á",
    season: "Mùa xuân, mùa hè",
    careTips: "Cần ánh sáng mặt trời đầy đủ, tưới nước đều đặn",
  },
  {
    name: "Hoa Lan",
    scientificName: "Orchidaceae",
    color: "Tím, Trắng, Hồng, Vàng",
    meaning: "Sang trọng, quý phái, may mắn",
    origin: "Châu Á, Nam Mỹ",
    season: "Mùa xuân, mùa hè",
    careTips: "Cần độ ẩm cao và ánh sáng gián tiếp",
  },
  {
    name: "Hoa Cúc",
    scientificName: "Chrysanthemum",
    color: "Vàng, Trắng, Đỏ, Tím",
    meaning: "Trường thọ, vui vẻ, tôn kính",
    origin: "Châu Á, Châu Âu",
    season: "Mùa thu",
    careTips: "Cần đất thoát nước tốt và ánh sáng mạnh",
  },
  {
    name: "Hoa Sen",
    scientificName: "Nelumbo nucifera",
    color: "Hồng, Trắng",
    meaning: "Thanh khiết, cao quý, giác ngộ",
    origin: "Châu Á",
    season: "Mùa hè, mùa thu",
    careTips: "Cần nước sâu và ánh sáng mặt trời trực tiếp",
  },
  {
    name: "Hoa Tulip",
    scientificName: "Tulipa",
    color: "Đỏ, Vàng, Hồng, Tím",
    meaning: "Tình yêu, sự thịnh vượng",
    origin: "Trung Đông, Châu Âu",
    season: "Mùa xuân",
    careTips: "Cần đất thoáng khí, tưới nước nhẹ nhàng",
  },
  {
    name: "Hoa Lavender",
    scientificName: "Lavandula",
    color: "Tím",
    meaning: "Thanh thản, bình yên, sự thư giãn",
    origin: "Địa Trung Hải",
    season: "Mùa hè",
    careTips: "Cần đất thoát nước tốt và ánh sáng mặt trời đầy đủ",
  },
  {
    name: "Hoa Dâm Bụt",
    scientificName: "Hibiscus",
    color: "Đỏ, Hồng, Vàng",
    meaning: "Sự quyến rũ, đam mê",
    origin: "Châu Á, Châu Phi",
    season: "Mùa hè, mùa thu",
    careTips: "Cần đất ẩm, tưới nước đều và ánh sáng trực tiếp",
  },
  {
    name: "Hoa Cẩm Tú Cầu",
    scientificName: "Hydrangea",
    color: "Xanh, Tím, Hồng, Trắng",
    meaning: "Sự chân thành, tình bạn, cảm ơn",
    origin: "Châu Á, Bắc Mỹ",
    season: "Mùa hè",
    careTips: "Cần đất ẩm và bóng râm nhẹ",
  },
  {
    name: "Hoa Poppy",
    scientificName: "Papaver somniferum",
    color: "Đỏ, Trắng, Hồng",
    meaning: "Ký ức, sự thanh thản",
    origin: "Châu Âu, Châu Á",
    season: "Mùa xuân, mùa hè",
    careTips: "Cần đất thoát nước tốt và ánh sáng mặt trời",
  },
  {
    name: "Hoa Mẫu Đơn",
    scientificName: "Paeonia",
    color: "Đỏ, Hồng, Trắng",
    meaning: "Sự giàu có, thịnh vượng, tình yêu",
    origin: "Châu Á, Châu Âu",
    season: "Mùa xuân, mùa hè",
    careTips: "Cần đất tơi xốp, thoát nước tốt và ánh sáng mặt trời",
  },
  {
    name: "Hoa Mimosa",
    scientificName: "Mimosa pudica",
    color: "Hồng",
    meaning: "Tình yêu, sự nhút nhát",
    origin: "Nam Mỹ",
    season: "Mùa xuân, mùa hè",
    careTips: "Cần đất ẩm, ánh sáng gián tiếp",
  },
  {
    name: "Hoa Hoa Súng",
    scientificName: "Nymphaea",
    color: "Hồng, Trắng, Tím",
    meaning: "Sự thanh khiết, thiêng liêng",
    origin: "Châu Á, Châu Phi",
    season: "Mùa hè",
    careTips: "Cần nước sâu và ánh sáng mặt trời",
  },
  {
    name: "Hoa Đỗ Quyên",
    scientificName: "Rhododendron",
    color: "Hồng, Đỏ, Trắng",
    meaning: "Lòng kiên cường, sự tự do",
    origin: "Châu Á, Bắc Mỹ",
    season: "Mùa xuân",
    careTips: "Cần đất thoát nước tốt và ánh sáng gián tiếp",
  },
  {
    name: "Hoa Thược Dược",
    scientificName: "Dahlia",
    color: "Đỏ, Vàng, Hồng, Trắng",
    meaning: "Sự mạnh mẽ, sang trọng",
    origin: "Mexico",
    season: "Mùa hè, mùa thu",
    careTips: "Cần đất tơi xốp và ánh sáng mặt trời đầy đủ",
  },
  {
    name: "Hoa Mai",
    scientificName: "Ochna integerrima",
    color: "Vàng",
    meaning: "Sự thịnh vượng, tài lộc",
    origin: "Châu Á",
    season: "Mùa xuân",
    careTips: "Cần đất ẩm và ánh sáng mặt trời trực tiếp",
  },
];

const Pagetwo = () => {
  return (
    <div
      className="table-responsive mb-5"
      style={{
        maxHeight: "370px",
        overflowY: "scroll", // Allows vertical scroll
      }}
    >
      <style>
        {`
          .table-responsive::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          /* General Table Styling */
          table {
            font-size: small;
            text-align: left;
            font-style: normal;
            margin: 25px auto;
            width: 100%;
            max-width: 800px;
            border-collapse: collapse;
          }

          tr {
            border: 1.5px solid rgba(192, 21, 204, 0.821);
          }

          td,
          th {
            padding: 8px;
            border: 1px solid rgba(192, 21, 204, 0.821);
            text-align: center;
          }

          /* Media Queries for smaller screens */
          @media (max-width: 768px) {
            table {
              font-size: 12px; /* Smaller font size */
              width: 100%;
            }
            td, th {
              padding: 6px; /* Reduced padding for smaller screens */
            }
          }

          @media (max-width: 480px) {
            table {
              font-size: 10px; /* Even smaller font size */
              width: 100%;
            }
            td, th {
              padding: 4px; /* Further reduced padding */
            }
          }
        `}
      </style>
      <table className="table table-bordered" style={{ borderRadius: "25%" }}>
        <thead>
          <tr>
            <th>Tên loài hoa</th>
            <th>Tên khoa học</th>
            <th>Màu sắc</th>
            <th>Ý nghĩa</th>
            <th>Vùng xuất xứ</th>
            <th>Mùa hoa nở</th>
            <th>Mẹo chăm sóc</th>
          </tr>
        </thead>
        <tbody>
          {flowers.map((flower, index) => (
            <tr key={index}>
              <td>{flower.name}</td>
              <td>{flower.scientificName}</td>
              <td>{flower.color}</td>
              <td>{flower.meaning}</td>
              <td>{flower.origin}</td>
              <td>{flower.season}</td>
              <td>{flower.careTips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pagetwo;
