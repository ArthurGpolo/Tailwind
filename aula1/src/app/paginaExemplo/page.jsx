import { ChevronRight, CloudDownload, Eye, Umbrella } from "lucide-react";
import Link from "next/link";

export default function PaginaExemplo() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between gap-2 container mx-auto p-5 bg-white">
        {/* logo */}
        <div className="flex gap-2 items-center justify-center">
          <Umbrella className="h-14 w-14" />
          <h1 className="text-4xl">Umbrella.</h1>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <li>
            <Link className="uppercase" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="uppercase" href={"/features"}>
              Features
            </Link>
          </li>
          <li>
            <Link className="uppercase" href={"/gallery"}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className="uppercase" href={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </header>

      {/* hero section */}
      <section className="bg-yellow-300 h-[calc(100vh-96px)] p-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-2 
        items-center justify-evenly h-full">
          {/* conteudo */}
          <div className="flex flex-col gap-4">

            {/* titulo e subtitulo */}
            <div className="">
              <h2 className="text-4xl">
                Intruducing <span className="font-extrabold">Umbrella</span>
              </h2>
              <p className="text-xl">Made to modify and use anywhere</p>
            </div>

            <ul className="flex flex-col gap-2 ps-6">
                <li className="flex gap-1">
                    <ChevronRight/> Sed ut perspitics unde omnis
                </li>
                <li className="flex gap-1">
                    <ChevronRight/> Inste natus erros sit vulumpecturem
                </li>
                <li className="flex gap-1">
                    <ChevronRight/> Doloreum lautidumin
                </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <button type="button" className="p-4 border-black border-2 rounded-none text-lg flex gap-2 items-center justify-center">
                    <CloudDownload /> Download
                </button>
                <button type="button" className="p-4 border-black border-2 rounded-none text-lg flex gap-2 text-nowrap items-center justify-center">
                   <Eye /> View Gallery
                </button>
            </div>

          </div>

          {/* imagem */}
          <div className="">
            <img src="https://placehold.co/600x400" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}