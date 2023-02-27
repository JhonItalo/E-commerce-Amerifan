import { Link } from "react-router-dom";
import * as S from "./styles";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { useLocation } from "react-router-dom";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import AccessibleButtonName from "../../components/AcessibleButtonName";
import Account from "../../components/account";

const Header = () => {
     console.log("header render");
     const { pathname } = useLocation();

     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Header>
                         <S.InitialPromotionSpan>
                              <p className="developer">Developer by John Ítalo Lima Lima</p>
                              <div>
                                   <Link to="https://www.linkedin.com/in/johnitalodev/" target="_blank">
                                        <AiFillLinkedin />
                                        <AccessibleButtonName name="linkedin" />
                                   </Link>
                                   <Link to="https://github.com/JhonItalo" target="_blank">
                                        <AiFillGithub />
                                        <AccessibleButtonName name="github" />
                                   </Link>
                              </div>
                         </S.InitialPromotionSpan>
                         <S.Content>
                              <S.MainContent>
                                   <Logo />
                                   <Search />
                                   <Account />
                                   <Cart />
                              </S.MainContent>
                         </S.Content>
                    </S.Header>
               )}
          </>
     );
};

export default Header;
