import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <div className="flex flex-col lg:flex-row bg-gray-950 justify-center items-center min-h-screen px-6 lg:px-24 py-12">

        <div className="flex flex-col bg-gray-950 justify-center items-center lg:items-start p-6 lg:p-8 max-w-xl text-center lg:text-left">

          {/* CONTEÚDO */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl pb-6">
            AI Your Business Can Run With
          </h1>

          <p className="text-white text-base sm:text-lg pb-6">
            Grammarly Business combines AI communication assistance with the knowledge of your entire organization to achieve results. Experience work with the intelligence you need, when you need it, where you're already working.
          </p>

          {/* BOTÃO */}
          <button className="bg-white w-full sm:w-52 rounded p-3 font-bold hover:bg-gray-200 transition">
            Start a Free Trial
          </button>

        </div>

        {/* IMAGEM  */}
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
          <img
            className="w-full h-auto object-cover"
            src="https://static-web.grammarly.com/1e6ajr2k4140/59dAQsO2FoFD26cqNig4CJ/f54e0752c2274f5aa654afc1161f5d36/Frame_31613244.png?w=1280"
            alt="imagem_home"
          />
        </div>

      </div>
    </>);
}