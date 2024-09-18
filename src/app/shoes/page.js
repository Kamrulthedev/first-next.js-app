import Image from 'next/image';
import React from 'react';

const AllShoes = async() => {
    const res = await fetch("http://localhost:5000/shoes", {
        next: {
          revalidate: 5,
        },
      });
      const shoes = await res.json();

    return (
        <div>
            <h1 className='text-3xl font-serif text-center items-center'>All Shoes Page</h1>
         <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="flex">
            <div className="card bg-base-100 w-96 shadow-xl p-5">
              <figure>
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  width={350}
                  height={70}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {shoe.name}
                  <div className="badge badge-secondary">{shoe.price}</div>
                </h2>
                <p>{shoe.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default AllShoes;