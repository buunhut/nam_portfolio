import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import { useSelector } from "react-redux";

const Detail = () => {
  const { ten } = useParams();
  const { products } = useSelector((state) => state.dataSlice);
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const find = products.find((item) => item.ma === ten);
    setDetail(find);
  }, [ten, products]);

  const tinhDonGiaTheoM2 = (data) => {
    try {
      // 1. Chuyển "350 tỷ" thành số
      const giaBanStr = data.giaBan.replace(/[^0-9]/g, ""); // "350"
      const giaBan = parseInt(giaBanStr, 10) * 1_000_000_000; // 350 * 1 tỷ

      // 2. Tìm số công nhận m2 từ chuỗi dienTich (VD: "công nhận 533m2")
      const dienTichMatch = data.dienTich.match(/công nhận\s+([\d.]+)/i);
      const dienTich = dienTichMatch ? parseFloat(dienTichMatch[1]) : null;

      if (!dienTich) {
        throw new Error("Không tìm thấy diện tích công nhận.");
      }

      // 3. Tính đơn giá
      const donGia = giaBan / dienTich;

      return {
        donGia, // đơn giá thô
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
    <div id="detail">
      <TopMenu data={true} />
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
              ? formatDonGiaToShortText(tinhDonGiaTheoM2(detail).donGia) + "/m2"
              : "Không xác định"}
          </li>

          <li>Hợp đồng thuê: {detail.hopDong}</li>
          <li>Hướng: {detail.huong}</li>
          <li>Pháp lý: {detail.phapLy}</li>

          <li>Vị trí: {detail.viTri}</li>
        </ul>

        <div className="photo">
          {detail?.allPhoto?.map((item, index) => {
            return <img src={`/img/${item}`} alt="" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
