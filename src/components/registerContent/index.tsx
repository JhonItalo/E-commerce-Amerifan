import React, { useRef, useState, useContext } from "react";
import MinHeader from "../../layouts/minHeader";
import * as S from "./styles";
import { BsEyeSlash } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { AiOutlineCloseCircle } from "react-icons/ai";

const RegisterContent = () => {
     const { simulateRegister, token } = useContext<contextAuthUser>(AuthUserContext);
     const [name, setName] = useState<string>("");
     const [cpf, setCpf] = useState<string>("");
     const [date, setDate] = useState<string>("");
     const [phone, setPhone] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [senha, setSenha] = useState<string>("");

     const [activeName, setActiveName] = useState<boolean | null>(null);
     const [activeCpf, setActiveCpf] = useState<boolean | null>(null);
     const [activeDate, setActiveDate] = useState<boolean | null>(null);
     const [activePhone, setActivePhone] = useState<boolean | null>(null);
     const [activeEmail, setActiveEmail] = useState<boolean | null>(null);
     const [activeSenha, setActiveSenha] = useState<boolean | null>(null);

     const [failure, setFailure] = useState<boolean>(false);

     const senhaRef = useRef<HTMLInputElement>(null);

     const changeName = (e: React.FormEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
          if (e.currentTarget.value.length > 1) {
               setActiveName(true);
          } else {
               setActiveName(false);
          }
     };

     const changeCpf = (e: React.FormEvent<HTMLInputElement>) => {
          const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
          setCpf(cpfMask(value));
          if (e.currentTarget.value.length === 14) {
               setActiveCpf(true);
          } else {
               setActiveCpf(false);
          }
     };

     const changeDate = (e: React.FormEvent<HTMLInputElement>) => {
          const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
          setDate(dateMask(value));
          if (e.currentTarget.value.length === 10) {
               setActiveDate(true);
          } else {
               setActiveDate(false);
          }
     };

     const changePhone = (e: React.FormEvent<HTMLInputElement>) => {
          const value = e.currentTarget.value.replace(/[^0-9.]/g, "");
          setPhone(phoneMask(value));
          if (e.currentTarget.value.length === 15) {
               setActivePhone(true);
          } else {
               setActivePhone(false);
          }
     };

     const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
          if (validationEmail(e.currentTarget.value)) {
               setActiveEmail(true);
          } else {
               setActiveEmail(false);
          }
     };

     const changeSenha = (e: React.FormEvent<HTMLInputElement>) => {
          setSenha(e.currentTarget.value);
          if (e.currentTarget.value.length >= 8) {
               setActiveSenha(true);
          } else {
               setActiveSenha(false);
          }
     };

     const cpfMask = (value: string) => {
          return value
               .replace(/\D/g, "")
               .replace(/(\d{3})(\d)/, "$1.$2")
               .replace(/(\d{3})(\d)/, "$1.$2")
               .replace(/(\d{3})(\d{1,2})/, "$1-$2");
     };
     const dateMask = (value: string) => {
          const v = value.replace(/\D/g, "").slice(0, 10);
          if (v.length >= 5) {
               return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
          } else if (v.length >= 3) {
               return `${v.slice(0, 2)}/${v.slice(2)}`;
          }
          return v;
     };

     const phoneMask = (value: string) => {
          if (!value) return "";
          value = value.replace(/\D/g, "");
          value = value.replace(/(\d{2})(\d)/, "($1) $2");
          value = value.replace(/(\d)(\d{4})$/, "$1-$2");
          return value;
     };

     const validationEmail = (email: string) => {
          const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
          return regex.test(email);
     };
     const hiddenSenha = () => {
          if (senhaRef) {
               const type = senhaRef.current?.getAttribute("type");
               if (type === "text") {
                    senhaRef.current?.setAttribute("type", "password");
               } else if (type === "password") {
                    senhaRef.current?.setAttribute("type", "text");
               }
          }
     };

     const register = () => {
          console.log("regsiter");
          if (
               validationEmail(email) &&
               name.length >= 1 &&
               cpf.length === 14 &&
               date.length === 10 &&
               phone.length === 15 &&
               senha.length >= 8
          ) {
               const token = "656565";
               simulateRegister(email, token);
          } else {
               setFailure(true);
          }
          return;
     };
     if (token) {
          return <Navigate to="/" />;
     }
     return (
          <>
               <MinHeader />
               <S.Content>
                    <p className="title">criar seu cadastro</p>
                    <span className="subtitle">
                         veja seus pedidos de forma f??cil, compre mais r??pido e tenha uma
                         <br /> experi??ncia personalizada :)
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "black" }}>
                         <span style={{ color: "red" }}>*</span> campos obrigat??rios
                    </span>

                    <S.Failure active={failure}>
                         <AiOutlineCloseCircle />
                         <p>Verifique todos os campos</p>
                    </S.Failure>

                    <S.Form>
                         <S.Item>
                              <p>
                                   <span className="ast">*</span> nome completo
                              </p>

                              <S.Input width="70%" active={activeName} type="text" value={name} onChange={changeName} required />
                         </S.Item>
                         <S.ItemGenre>
                              <p>
                                   <span className="ast">*</span> g??nero
                              </p>
                              <p className="legend">pra gente te conhecer um pouquinho melhor :)</p>
                              <label className="radios">
                                   <input type="radio" value="Female" name="gender" required />
                                   feminino
                              </label>
                              <label className="radios">
                                   <input type="radio" value="Male" name="gender" required />
                                   masculino
                              </label>
                              <label className="radios">
                                   <input type="radio" value="Other" name="gender" required />
                                   n??o informar
                              </label>
                         </S.ItemGenre>
                         <S.Item>
                              <p>
                                   <span className="ast">*</span> data de nascineto
                              </p>
                              <p className="legend">necess??rio pra identificar a maioridade, no formato DD/MM/AAAA</p>
                              <S.Input
                                   width="30%"
                                   active={activeDate}
                                   type="text"
                                   placeholder="00/00/0000"
                                   value={date}
                                   onChange={changeDate}
                                   maxLength={10}
                                   minLength={10}
                                   required
                              />
                         </S.Item>
                         <S.Item>
                              <p>
                                   <span className="ast">*</span> cpf
                              </p>
                              <p className="legend">necess??rio pra emiss??o das Notas Fiscais</p>
                              <S.Input
                                   width="30%"
                                   active={activeCpf}
                                   type="text"
                                   placeholder="___ ___ ___ - __"
                                   value={cpf}
                                   onChange={changeCpf}
                                   maxLength={14}
                                   minLength={14}
                                   required
                              />
                         </S.Item>
                         <S.Item>
                              <p>
                                   <span>*</span> telefone
                              </p>
                              <p className="legend">caso a gente precise entrar em contato sobre seus pedidos</p>
                              <S.Input
                                   width="30%"
                                   active={activePhone}
                                   type="text"
                                   placeholder="(__) _____ - ____"
                                   value={phone}
                                   onChange={changePhone}
                                   maxLength={15}
                                   minLength={15}
                                   required
                              />
                         </S.Item>
                         <S.Item>
                              <p>
                                   <span>*</span> email
                              </p>
                              <p className="legend">
                                   informe um e-mail v??lido. Voc?? vai precisar ativar sua conta depois de criar seu cadastro
                              </p>
                              <S.Input
                                   width="70%"
                                   active={activeEmail}
                                   type="text"
                                   value={email}
                                   onChange={changeEmail}
                                   required
                              />
                         </S.Item>
                         <S.ItemSenha>
                              <p>
                                   <span>*</span> senha
                              </p>
                              <p className="legend">precisa ter entre 8 e 20 caracteres</p>

                              <div>
                                   <S.InputSenha
                                        active={activeSenha}
                                        type="password"
                                        ref={senhaRef}
                                        placeholder="Digite sua senha"
                                        minLength={8}
                                        required
                                        value={senha}
                                        onChange={changeSenha}
                                   />
                                   <BsEyeSlash onClick={hiddenSenha} />
                              </div>
                         </S.ItemSenha>

                         <button onClick={register}>criar seu cadastro</button>
                    </S.Form>
                    <p style={{ marginTop: "2rem" }}>
                         N??o se preocupe, nosso site ?? seguro! Ao criar o seu cadastro, <br /> voc?? concorda com a nossa&nbsp;
                         <Link to="/" style={{ textDecoration: "underline" }}>
                              pol??tica de privacidade
                         </Link>
                    </p>
                    <p style={{ marginTop: "2rem" }}>
                         j?? tem cadastro?&nbsp;
                         <Link to="/login" style={{ textDecoration: "underline" }}>
                              entrar
                         </Link>
                    </p>
               </S.Content>
          </>
     );
};

export default RegisterContent;
