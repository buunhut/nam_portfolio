import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TopMenu from "../components/TopMenu";
import { Outlet, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.dataSlice);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Lấy danh sách category không trùng
  const uniqueCategories = [
    ...new Set(products.flatMap((product) => product.categories)),
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      // Lọc trùng theo proName (bỏ trùng tên)
      const uniqueMap = new Map();
      products.forEach((sp) => {
        const key = sp.proName.trim().toLowerCase();
        if (!uniqueMap.has(key)) {
          uniqueMap.set(key, sp);
        }
      });
      setFilteredProducts(Array.from(uniqueMap.values()));
    } else {
      const filtered = products.filter((sp) =>
        sp.categories.includes(selectedCategory)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div id="portfolio">
      {/* trượt xuống 200px thì menu xuất hiện, có hiệu ứng giản từ trên xuống*/}
      <TopMenu />

      <div className="banner"></div>
      <div className="content">
        {/* Tabs */}
        <div className="tab">
          <ul>
            <li
              style={{
                borderBottom:
                  selectedCategory === "All" ? "3px solid black" : "",
                color: selectedCategory === "All" ? "black" : "",
              }}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {uniqueCategories.map((cat, index) => (
              <li
                key={index}
                style={{
                  borderBottom:
                    selectedCategory === cat ? "3px solid black" : "",
                  color: selectedCategory === cat ? "black" : "",
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="product">
          {filteredProducts.map((item, index) => (
            <div
              className="productItem"
              key={`${selectedCategory}-${index}`}
              onClick={() => {
                navigate(`${item.ma}`);
              }}
            >
              <div className="imgWrapper">
                <img
                  src={`/img/${item.allPhoto[[0]]}`}
                  alt={item.proName || "No photo"}
                />
              </div>
              <p className="proName">{item.proName}</p>
              <p className="title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
