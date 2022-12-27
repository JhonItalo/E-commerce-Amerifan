import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import AccessibleName from "../AcessibleName";
const Cart = () => {
     const { storage } = useContext(CartContext);
     return (
          <S.Conteiner>
               <Link to="/cart">
                    <AccessibleName name="cart" />
                    <p>{storage.length > 0 && storage.length}</p>
                    <BsCart3 />
               </Link>
          </S.Conteiner>
     );
};

export default Cart;
