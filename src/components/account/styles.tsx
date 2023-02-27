import styled from "styled-components";

export const Account = styled.div`
     position: relative;

     .account {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;

          svg {
               font-size: 2rem;
               color: white;
          }
          p {
               color: white;
               span {
                    font-weight: 700;
               }
          }
     }

     &:hover {
          .modalLogin {
               display: block;
          }
     }
     .modalLogin {
          display: none;
          width: 140%;
          padding-top: 1rem;
          position: absolute;
          left: -20%;
          background-color: transparent;

          z-index: 1;

          div {
               display: flex;
               width: 100%;
               height: 180px;
               flex-direction: column;
               justify-content: center;
               gap: 1rem;
               align-items: center;
               position: relative;
               border-radius: 5px;
               background-color: white;
               z-index: 2;

               button {
                    min-width: 60%;
                    padding: 1rem;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                    color: white;
                    background-color: #127bc0;
                    &:hover {
                         filter: brightness(0.9);
                    }
               }
               span {
                    font-size: 0.9rem;
                    color: #413e3e;
               }
               a {
                    text-decoration: underline;
                    color: red;
               }
          }
     }
`;