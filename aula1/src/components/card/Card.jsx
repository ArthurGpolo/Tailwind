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
            <div className="container sm:grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {produtos && produtos.map((produto) => (
                    <div key={produto.id} className="flex hover:-translate-y-1 ease-linear duration-100">
                            <div className="card md:flex p-2 border border-gray-300 rounded-md shadow-sm">
                                <img src={produto.images[0]} className="card-img-top h-70"/>

                                <div className="card-body flex flex-col gap-3 justify-between">
                                    <h6 className="card-title font-bold text-2xl">{produto.title}</h6>
                                    <p className="card-text text-sm">
                                        {produto.description}
                                    </p>
                                    <p className="bg-gray-300 border border-gray-900 rounded-sm p-1 w-fit"><strong>{produto.tags[0]}</strong></p>
                                    <button className=" bg-botao2 hover:bg-hover focus:outline-2 focus:outline-offset-2 focus:outline-hover active:bg-hover rounded-sm p-2">
                                        <a href="#" className="text-white  font-bold">
                                            Ver detalhes
                                        </a>
                                    </button>
                                </div>
                            </div>
                    </div>
                ))}
            </div>

        </>
    )
};