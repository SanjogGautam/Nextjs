import Image from "next/image";
import product from "./product/product.json";
import React from "react";
export default function Home() {
  return (
    <>
      <section className="container mx-auto px-4 py-6">
    <h2 className="text-3xl">Latest Products</h2>
    <div className="flex">
      {
        product.map((a)=>(
        <div key={a.id} className="p-4">
          <Image src={a.image} alt={a.title} width={200} height={200} />
          <h3 className="text-xl">{a.title}</h3>
          <p className="text-gray-600">${a.price}</p>
        </div>
        ))
      }
    </div>
      </section>

    </>
  );
}
