import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     padding: 1rem;
     border-radius: 5px;
     display: flex;
     gap: 2rem;

     background-color: white;
`;
export const Describe = styled.section`
     h3 {
          margin-bottom: 1rem;
     }
     background-color: white;
`;

export const TechnicalInformation = styled.section`
     margin-top: 2rem;
     margin-bottom: 4rem;
     h3 {
          margin-bottom: 2rem;
     }

     .customTable {
          width: 100%;
          background-color: #ffffff;
          border-collapse: collapse;
          border-width: 2px;
          border-color: #7ea8f8;
          border-style: solid;
          color: #000000;
     }

     table.customTable td,
     table.customTable th {
          border-width: 2px;
          border-color: #7ea8f8;
          border-style: solid;
          padding: 5px;
     }

     table.customTable thead {
          background-color: #7ea8f8;
     }
`;