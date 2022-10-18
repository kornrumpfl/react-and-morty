import styled from "styled-components";
export default function Card({ name, src, status, ...props }) {
  return (
    <CardSt>
      <section>
        <img src={src} alt="" />
        <h1>{name}</h1>
      </section>
    </CardSt>
  );
}

const CardSt = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
