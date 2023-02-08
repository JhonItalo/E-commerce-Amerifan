import React from "react";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type props = {
     data: pokemonSmall[];
     input: string;
};

const ResultsContent = ({ data, input }: props) => {
     const navigate = useNavigate();
     const [search, setSearch] = useState<string>(input);
     console.log(data, "conetnt");

     useEffect(() => {
          setSearch(input);
     }, [input]);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     const handleEnterResult = (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter") {
               navigate(`/results/${search}`);
          }
     };

     return (
          <S.Conteiner>
               <h2>What are you looking for?</h2>
               <span className="subTitle">
                    Duis dictum neque et commodo hendrerit. Etiam bibendum ligula et <br /> nibh vulputate ultricies. Vestibulum
                    iaculis
               </span>
               <S.inputResults>
                    <div className="conteinerinput">
                         <input type="text" value={search} onChange={changeInput} onKeyDown={handleEnterResult} />
                         <button className="iconSearch">
                              <FiSearch
                                   onClick={() => {
                                        setSearch("");
                                        navigate(`/results/${search}`);
                                   }}
                              />
                         </button>
                    </div>

                    {data && (
                         <>
                              <span className="foundresults"> Resultados encontrados: {data.length} </span>
                              <div className="results">
                                   {data.map((item: pokemonSmall) => (
                                        <Link key={item.name} to={`/products/${item.name}`}>
                                             <p key={item.name}>{item.name}</p>
                                        </Link>
                                   ))}
                              </div>
                         </>
                    )}
               </S.inputResults>
          </S.Conteiner>
     );
};

export default ResultsContent;