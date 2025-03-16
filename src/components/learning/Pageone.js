import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://i.pinimg.com/474x/71/65/1e/71651e756dc69c9a8b9935507315d4c3.jpg",
    alt: "Image 1",
    label: "Ảnh 1",
  },
  {
    src: "https://i.pinimg.com/474x/34/f9/c4/34f9c465b12c6d947c23ed95f5b077bc.jpg",
    alt: "Image 2",
    label: "Ảnh 2",
  },
  {
    src: "https://i.pinimg.com/474x/a7/f1/9c/a7f19c18b7e204293474c69f8aa9f531.jpg",
    alt: "Image 3",
    label: "Ảnh 3",
  },
  {
    src: "https://i.pinimg.com/474x/f0/9f/ce/f09fce237cb325d4abedfb46315c7e48.jpg",
    alt: "Image 4",
    label: "Ảnh 4",
  },
  {
    src: "https://i.pinimg.com/736x/de/67/ad/de67ad0b8fc14c42473db6ccd323f723.jpg",
    alt: "Image 5",
    label: "Ảnh 5",
  },
  {
    src: "https://i.pinimg.com/474x/15/2e/d9/152ed988eafcbe7870d55aa6d9ba725f.jpg",
    alt: "Image 6",
    label: "Ảnh 6",
  },
  {
    src: "https://i.pinimg.com/736x/5d/f6/97/5df6972fd3211f5fe06ee8340dfc4f58.jpg",
    alt: "Image 7",
    label: "Ảnh 7",
  },
  {
    src: "https://i.pinimg.com/474x/1e/f0/a2/1ef0a244a9b6975fe82f74fa0a948cf5.jpg",
    alt: "Image 8",
    label: "Ảnh 8",
  },
  {
    src: "https://i.pinimg.com/474x/86/6a/74/866a7454aa974d0a3118953e1d0b6db6.jpg",
    alt: "Image 9",
    label: "Ảnh 9",
  },
  {
    src: "https://i.pinimg.com/736x/53/c9/92/53c9926fe58c5d67f0e0b3f7a37669aa.jpg",
    alt: "Image 10",
    label: "Ảnh 10",
  },
  // Thêm một số ảnh để kiểm tra hiệu ứng
  {
    src: "https://i.pinimg.com/736x/b8/8e/97/b88e974586a73165c9022b5fa919889b.jpg",
    alt: "Image 11",
    label: "Ảnh 11",
  },
  {
    src: "https://i.pinimg.com/474x/98/21/e7/9821e74d8cf5d4d966830291755cf457.jpg",
    alt: "Image 12",
    label: "Ảnh 12",
  },
];

const Pageone = () => {
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const initialRows = 2;

  const updateColumns = () => {
    const width = window.innerWidth;
    if (width >= 1536) {
      setColumns(5);
    } else if (width >= 1280) {
      setColumns(4);
    } else if (width >= 768) {
      setColumns(3);
    } else if (width >= 576) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const initialDisplayCount = columns * initialRows;
  const displayedImages = showAll
    ? images
    : images.slice(0, initialDisplayCount);

  const filteredImages = displayedImages.filter((image) =>
    image.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="none">
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm hình ảnh..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="row g-0">
        {filteredImages.map((image, index) => (
          <div key={index} className="col-custom">
            <div className="cyber-price-chart">
              <div className="pic" onClick={() => setSelectedImage(image)}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="rounded-image"
                />
                <br />
                {image.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length > initialDisplayCount && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary mb-5"
          >
            {showAll
              ? "Thu gọn"
              : `Xem thêm (+${images.length - initialDisplayCount} ảnh)`}
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <h2>{selectedImage.label}</h2>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={400}
              height={400}
            />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pageone;
