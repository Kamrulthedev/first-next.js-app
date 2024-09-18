import Image from "next/image";
import Counter from "./components/counter/Counter";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
    <div className=" h-screen ">
      <h1 className="text-2xl font-serif text-center uppercase text-white">
        This is My First Next.js Application
      </h1>
      <Counter></Counter>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="flex">
            <div className="card bg-base-100 w-96 shadow-xl">
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
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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

export default HomePage;
