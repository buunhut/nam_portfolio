import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import { useSelector } from "react-redux";
import { Image } from "antd";

const Detail = () => {
  const { ten } = useParams();
  const { products, selectedCategory } = useSelector(
    (state) => state.dataSlice
  );
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const find = products.find((item) => item.ma === ten);
    setDetail(find);
  }, [ten, products]);

  const tinhDonGiaTheoM2 = (data) => {
    try {
      // 1. Chuyển "2,2 tỷ" thành số
      const giaBanStr = data.giaBan
        .toLowerCase()
        .replace(",", ".") // chuyển 2,2 => 2.2
        .replace(/[^0-9.]/g, ""); // giữ lại số và dấu chấm

      const giaBan = parseFloat(giaBanStr) * 1_000_000_000; // nhân với 1 tỷ

      if (isNaN(giaBan) || giaBan === 0) {
        throw new Error("Không xác định được giá bán hợp lệ.");
      }

      // 2. Tìm số công nhận m2 từ chuỗi dienTich (VD: "công nhận 533m2")
      const dienTichMatch = data.dienTich.match(/công nhận\s+([\d.]+)/i);
      const dienTich = dienTichMatch ? parseFloat(dienTichMatch[1]) : null;

      if (!dienTich) {
        throw new Error("Không tìm thấy diện tích công nhận.");
      }

      // 3. Tính đơn giá
      const donGia = giaBan / dienTich;

      return {
        donGia, // đơn giá tính theo đồng/m2
      };
    } catch (error) {
      console.error("Lỗi khi tính đơn giá:", error.message);
      return null;
    }
  };

  const formatDonGiaToShortText = (value) => {
    if (!value || isNaN(value)) return "Không hợp lệ";

    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(2) + " tỷ";
    } else if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(2) + " triệu";
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(2) + " nghìn";
    } else {
      return value.toString();
    }
  };

  return (
    <>
      <TopMenu data={true} />

      <div className="navMenu">
        <ul>
          <li>
            <NavLink to={"/"}>Home \</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>Nhà Đất \</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>{selectedCategory}</NavLink>
          </li>
        </ul>
      </div>

      <div id="detail">
        <div className="content">
          <h1>{detail.proName}</h1>
          <ul>
            <li>Địa chỉ: {detail.address}</li>
            <li>Diện tích: {detail.dienTich}</li>
            <li>Kết cấu: {detail.ketCau}</li>
            <li>Giá bán: {detail.giaBan}</li>
            <li>
              Đơn giá:{" "}
              {detail && tinhDonGiaTheoM2(detail)
                ? formatDonGiaToShortText(tinhDonGiaTheoM2(detail).donGia) +
                  "/m2"
                : "Không xác định"}
            </li>

            <li>Hợp đồng thuê: {detail.hopDong}</li>
            <li>Hướng: {detail.huong}</li>
            <li>Pháp lý: {detail.phapLy}</li>

            <li>Vị trí: {detail.viTri}</li>
          </ul>

          <div className="photo">
            {detail?.allPhoto?.map((item, index) => {
              if (item.endsWith(".mp4")) {
                return (
                  <video key={index} controls width="100%">
                    <source src={`/img/${item}`} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                  </video>
                );
              } else {
                return <Image width={510} src={`/img/${item}`} />;
                // <img src={`/img/${item}`} alt="" key={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
