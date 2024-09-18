import Image from "next/image";
import Counter from "./components/counter/Counter";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();


  return (
    <div className=" h-screen ">
      <h1 className="text-2xl font-serif text-center uppercase text-white">
        This is My First Next.js Application
      </h1>
      <Counter></Counter>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {shoes.slice(3).map((shoe) => (
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
      <div className="flex justify-center p-5">
          <Link href='/shoes' className="font-serif  p-3 rounded-lg bg-green-500 text-black text-2xl">SEE MORE</Link>
        </div>
    </div>
  );
};

export default HomePage;
