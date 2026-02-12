import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-2 bg-gray-950 justify-center items-center h-215 px-85">
      <div className="grid grid-cols-1 bg-gray-950 justify-center items-center p-8">
        <h1 className="text-white font-bold text-5xl w-130 pb-10">AI Your Business Can Run With</h1>
        <p className="text-white  text-lg w-130 pb-10">Grammarly Business combines AI communication assitance with the knowledge of your entire organization to achieve results. Experience work with the intelligence you need, when you need it, where you´re already working.</p>
        <button className="bg-white w-45 rounded p-2 font-bold">Start a Free Trial</button>
      </div>

       <img className="w-140 h-120" src="https://static-web.grammarly.com/1e6ajr2k4140/5R5dKxUhBQPygoWW6u2LjV/679b7d6476301b0871ff69b1e0a3ef52/Image__55_.png?w=936" />

       </div>
    </>
  );
}
