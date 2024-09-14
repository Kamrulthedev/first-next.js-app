
import Counter from "./components/counter/Counter";

const HomePage = () => {
  console.log("Hello Wold");

  return (
    <div className="bg-zinc-500 h-screen">
      <h1 className="text-2xl font-serif text-center uppercase text-black">
        This is My First Next.js Application
      </h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
