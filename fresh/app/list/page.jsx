import React from "react";
import Image from "next/image";

export default function List() {
  const products = ["Tomatoes", "Pastas", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => {
        return (
          <div className="food" key={i}>
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
