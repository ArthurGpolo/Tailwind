"use client";

import React, { useEffect, useState } from "react";

export default function Card() {

    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function Carregar() {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=9");
                const data = await res.json();
                setProdutos(data.products);
                console.log(data)
            } catch (err) {
                setError(err.message);
            }
        }

        Carregar();
    }, []);


    return (
        <>

            <div className="container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {produtos && produtos.map((produto) => (
                    <div
                        key={produto.id}
                        className="hover:-translate-y-1 transition-transform duration-150"
                    >
                        <div className="flex flex-col md:flex-row border border-gray-300 rounded-md shadow-lg overflow-hidden bg-white h-full">

                            {/* IMAGEM */}
                            <div className="w-auto md:w-1/2 md:h-auto">
                                <img
                                    src={produto.images[0]}
                                    alt={produto.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* CONTEÚDO */}
                            <div className="flex flex-col justify-between p-2 flex-1 gap-3">

                                <h6 className="font-bold text-xl md:text-2xl">
                                    {produto.title}
                                </h6>

                                <p className="text-sm text-gray-600">
                                    {produto.description}
                                </p>



                                <span className="bg-gray-200 border border-gray-900 rounded-sm px-2 py-1 w-fit text-sm">
                                    <strong>{produto.tags[0]}</strong>
                                </span>


                                <button className="bg-botao2 hover:bg-hover transition-colors text-white font-bold rounded-sm p-2">
                                    Ver detalhes
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
};