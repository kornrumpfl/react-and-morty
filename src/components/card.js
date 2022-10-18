import styled from "styled-components";
export default function Card() {
  return (
    <CardSt>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt=""
      />
      <h1>Morty Smith</h1>
    </CardSt>
  );
}

const CardSt = styled.div``;
