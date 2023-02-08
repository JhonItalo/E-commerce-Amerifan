import { Link } from "react-router-dom";
import AccessibleName from "../AcessibleName";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { pokemonInfo } from "../../types/types";
import { toast } from "react-toastify";

type props = {
     pokemon: pokemonInfo | undefined;
};

const Card = ({ pokemon }: props) => {
     const { addToCart } = useContext(CartContext);
     return (
          <S.Conteiner style={{ flex: "none" }} className="controlParentStyle">
               {pokemon && (
                    <>
                         <Link to={`/products/${pokemon.name}`}>
                              <img src={pokemon.image} alt={pokemon.name} width="140px" height="158px" />
                              <AccessibleName name={pokemon.name} />
                         </Link>
                         <div className="info">
                              <p className="name">{pokemon.name}</p>
                              <div className="type">
                                   {pokemon.types.map((type: string) => (
                                        <S.Type color={type} key={type}>
                                             {type}
                                        </S.Type>
                                   ))}
                              </div>
                         </div>

                         <button
                              className="addtocart"
                              onClick={() => {
                                   addToCart(pokemon.name, pokemon.image);
                                   toast.success("Adicionado ao carrinho");
                              }}
                         >
                              Add to Cart
                         </button>
                    </>
               )}
          </S.Conteiner>
     );
};

export default Card;
